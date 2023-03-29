const {Brand} = require("../models/models");
const {ApiError} = require('../error/apiError')

class BrandControl{
    async addBrand(req, res, next){
        try {
            const {name} = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getBrands(req, res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async deleteBrand(req, res, next){
        try {
            const {id} = req.body
            const check = await Brand.destroy( { where: {id} } )
            if (check){
                return res.json({message: `Brand with id ${id} successfully deleted.`})
            }
            else{
                return next(ApiError.badRequest(`There is no brand with id ${id}.`))
            }
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = {BrandControl}