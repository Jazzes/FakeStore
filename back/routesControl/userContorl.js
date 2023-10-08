const {ApiError} = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket, Compare} = require('../models/models')
const {validationResult} = require("express-validator")


const createJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '7d'}
    )
}

class UserControl{
    async register(req, res, next){
        try {
            const validError = validationResult(req)
            if (!validError.isEmpty()){
                return next(ApiError.badRequest({
                    message: 'Email must be example@gmail.com, password must have >8 characters.',
                    error: validError
                }))
            }
            const {email, password, secretword} = req.body
            let user
            if(!password || !email){
                return next(ApiError.badRequest('Incorrect email or password.'))
            }
            const check = await User.findOne({where: {email}})
            if (check){
                return next(ApiError.badRequest("User with this email already exists."))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            if (secretword === process.env.SECRET_WORD){
                user = await User.create({email, role: "ADMIN", password: hashPassword})
            }
            else {
                user = await User.create({email, password: hashPassword})
            }

            const basket = await Basket.create({userId: user.id})
            const compare = await Compare.create({userId: user.id})

            const token = createJwt(user.id, user.email, user.role)

            return res.json({token})
        } catch (e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next){
        try {
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user){
                return next(ApiError.badRequest("There is no user with this email."))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword){
                return next(ApiError.badRequest("Incorrect password."))
            }
            const token = createJwt(user.id, user.email, user.role)
            return res.json({token})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async auth(req, res, next){
        try {
            const token = createJwt(req.user.id, req.user.email, req.user.role)
            return res.json({token})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = {UserControl}