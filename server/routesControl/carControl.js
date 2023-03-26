const uuid = require('uuid')
const path = require('path')
const { Op } = require('sequelize');
const {Car, CarImages, CarInfo, Brand} = require('../models/models')
const {ApiError} = require("../error/apiError");

class CarControl{
    async addCar(req, res, next){
        try {
            let {name, price, brandId, engineId, speed} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            const car = await Car.create({name, price, speed, brandId, engineId, img: fileName})
            if (car) {
                await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            else{
                return next(ApiError.badRequest(`Car called ${name} has already exist.`))
            }
            return res.json(car)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async addInfo(req, res, next){
        try {
            let {price, horsepower, topspeed, engine, carId} = req.body
            const carInfo = await CarInfo.create({price, horsepower, topspeed, engine, carId})
            return res.json(carInfo)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async addImages(req, res, next){
        try {
            let res = []
            const {carId} = req.body
            const {images} = req.files
            if (carId) {
                for (const i of images) {
                    let fileName = uuid.v4() + ".jpg"
                    const image = await CarImages.create({carId, img: fileName})
                    await i.mv(path.resolve(__dirname, '..', 'static', fileName))
                    res.push(image)
                }
            }
            else{
                return next(ApiError.badRequest(`There is no car with id ${carId}`))
            }
            return res.json(res)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getCars(req, res, next){
        try {
            let {brandId, engineId, limit, page, priceMin, priceMax} = req.query
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
            if (priceMin || priceMax) {
                options.price = {};
                if (priceMin) {
                    options.price[Op.gte] = priceMin;
                }
                if (priceMax) {
                    options.price[Op.lte] = priceMax;
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
            const fullCar = []
            const {id} = req.query
            const car = await Car.findOne( { where: {id} } )
            if (!car){
                return next(ApiError.badRequest(`There is no car with id ${carId}`))
            }
            const car_info = await CarInfo.findOne ( {where: {carId: id}} )
            const car_images = await CarImages.findAll( {where: {carId: id}} )
            fullCar.push(car, car_info, car_images)

            return res.json(fullCar)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }

    }

    async deleteCar(req, res, next){
        try {
            const {id} = req.body
            const check = await Car.destroy( { where: {id} } )
            await CarInfo.destroy({where:{carId : id}})
            await CarImages.destroy({where:{carId : id}})
            if (check){
                return res.json({message: `Car named ${name} successfully deleted.`})
            }
            else{
                return next(ApiError.badRequest(`There is no car called ${name}.`))
            }
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = {CarControl}