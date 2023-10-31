const {Compare, CompareCar, Basket, BasketCar} = require("../models/models");
const {ApiError} = require('../error/apiError')

class ShopControl{

    async getBasketItems(req, res, next){
        try {
            const basketUser = await Basket.findOne({where: {userId: req.user.id}})
            const basketItems = await BasketCar.findAndCountAll({
                where: {basketId: basketUser.id},
                attributes: ['carId']
            })

            return res.json(basketItems)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getCompareItems(req, res, next){
        try {
            const compareUser = await Compare.findOne({where: {userId: req.user.id}})
            const compareItems = await CompareCar.findAll({
                where: {compareId: compareUser.id},
                attributes: ['carId']
            })

            return res.json({compareId: compareItems})

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async addOrDeleteBasketCar(req, res, next){
        try {
            const {id} = req.body

            const basketUser = await Basket.findOne({where: {userId: req.user.id}})

            const check = await BasketCar.findOne({where: {carId: id, basketId: basketUser.id}})

            if (check){
                await check.destroy()
                return res.json({success: true, status: "deleted"})
            }

            const carBasket = await BasketCar.create({basketId: basketUser.id, carId: id})

            return res.json({success: true, status: "added"})

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async addOrDeleteCompareCar(req, res, next){
        try {
            const {id} = req.body

            const compareUser = await Compare.findOne({where: {userId: req.user.id}})

            const check = await CompareCar.findOne({where: {carId: id, compareId: compareUser.id}})

            if (check){
                await check.destroy()
                return res.json({success: true, status: "deleted"})
            }

            const carCompare = await CompareCar.create({compareId: compareUser.id, carId: id})

            return res.json({success: true, status: "added"})

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}


module.exports = {ShopControl}