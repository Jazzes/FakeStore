const jwt = require('jsonwebtoken')
const {ApiError} = require("../error/apiError");

module.exports = function (req, res, next){
    if (req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token){
            return ApiError.unauthorizated("Unauthorizated.")
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (e) {
        return ApiError.badRequest(e.message)
    }
}