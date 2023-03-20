const uuid = require('uuid')
const path = require('path')
const {Car, CarImages, CarInfo} = require('../models/models')
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
            return res.json(res)
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
            if (!brandId && !engineId) {
                cars = await Car.findAndCountAll({limit, offset})
            }
            if (!brandId && engineId) {
                cars = await Car.findAndCountAll({where: {engineId}, limit, offset})
            }
            if (brandId && !engineId) {
                cars = await Car.findAndCountAll({where: {brandId}, limit, offset})
            }
            if (brandId && engineId) {
                cars = await Car.findAndCountAll({where: {brandId, engineId}, limit, offset})
            }
            return res.json(cars)
        } catch (e){
            return next(ApiError.badRequest(e.message))
        }

    }

    async getCar(req, res, next){
        try {
            const {id} = req.query
            const car = await Car.findOne({ where: {id} })
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }

    }

    async deleteCar(req, res){

    }
}


module.exports = {CarControl}