const uuid = require('uuid')
const path = require('path')
const { Op } = require('sequelize');
const {Car, CarImages, CarInfo} = require('../models/models')
const {ApiError} = require("../error/apiError");
const fs = require('fs')

class CarControl{
    async addCar(req, res, next){
        try {
            let {name, price, brandId, engineId, acceleration} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            const car = await Car.create({name, price, acceleration, brandId, engineId, img: fileName})
            if (car) {
                await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            return res.json(car)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async addInfo(req, res, next){
        try {
            let {horsepower, topspeed, engine, carId} = req.body
            const carInfo = await CarInfo.create({horsepower, topspeed, engine, carId})
            return res.json(carInfo)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async addImages(req, res, next){
        try {
            const {carId} = req.body
            const {img} = req.files
            if (carId) {
                let fileName = uuid.v4() + ".jpg"
                const image = await CarImages.create({carId, img: fileName})
                await img.mv(path.resolve(__dirname, '..', 'static', fileName))
                return res.json(image)
            }

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getCars(req, res, next){
        try {
            let {brandId, engineId, limit, page, pricemin, pricemax} = req.query
            limit = limit || 12
            page = page || 1
            let cars, offset = limit * page - limit
            const options = {}
            if (brandId) {
                options.brandId = brandId;
            }
            if (engineId) {
                options.engineId = engineId;
            }
            if (pricemin || pricemax) {
                options.price = {};
                if (pricemin) {
                    options.price[Op.gte] = pricemin;
                }
                if (pricemax) {
                    options.price[Op.lte] = pricemax;
                }
            }
            cars = await Car.findAndCountAll({where: options, limit, offset})
            return res.json(cars)
        } catch (e){
            return next(ApiError.badRequest(e.message))
        }

    }

    async getCar(req, res, next){
        try {
            const {id} = req.params
            const car = await Car.findOne({
                where: {id},
                include: [CarImages, CarInfo]
            })
            return res.json(car)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async deleteCar(req, res, next){
        try {
            const {id} = req.body
            const car = await Car.findOne({
                where: {id},
                include: [CarImages, CarInfo]
            })
            if (!car){
                return next(ApiError.badRequest(`There is no car with id ${id}.`))
            }
            fs.unlink(`${__dirname}/../static/${car.dataValues.img}`, err => {
                console.error(err)
            })
            for (let el of car.dataValues.car_images) {
                await fs.unlink(`${__dirname}/../static/${el.dataValues.img}`, err => {
                    if (err)
                        console.error(err)
                })
            }
            await Car.destroy( {where: {id}})
            return res.json({message: `Car with id ${id} successfully deleted.`})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = {CarControl}