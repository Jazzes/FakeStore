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
            const {id} = req.body
            const check = await Engine.destroy( { where: {id} } )
            if (check){
                return res.json({message: `Engine with id ${id} successfully deleted.`})
            }
            else{
                return next(ApiError.badRequest(`There is no engine with id ${id}.`))
            }
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = {EngineControl}