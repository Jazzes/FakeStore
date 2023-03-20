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
            const {name} = req.body
            const check = await Brand.destroy( { where: {name: name} } )
            if (check){
                return res.json({message: `Brand named ${name} successfully deleted.`})
            }
            else{
                return next(ApiError.badRequest(`There is no Brand called ${name}.`))
            }
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = {BrandControl}