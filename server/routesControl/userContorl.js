const {ApiError} = require('../error/apiError')

class UserControl{
    async register(req, res){

    }

    async login(req, res){

    }

    async auth(req, res, next){
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('There is no ID'))
        }
        res.json(id)
    }
}


module.exports = {UserControl}