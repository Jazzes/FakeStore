const {Engine} = require('../models/models')
const {ApiError} = require('../error/apiError')

class EngineControl{
    async addEngine(req, res, next){
        try {
            const {name} = req.body
            const engine = await Engine.create({name})
            return res.json(engine)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getEngines(req, res){
        const engines = await Engine.findAll()
        return res.json(engines)
    }

    async deleteEngine(req, res, next){
        try {
            const {name} = req.body
            const check = await Engine.destroy( { where: {name: name} } )
            if (check){
                return res.json({message: `Engine named ${name} successfully deleted.`})
            }
            else{
                return next(ApiError.badRequest(`There is no engine called ${name}.`))
            }
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = {EngineControl}