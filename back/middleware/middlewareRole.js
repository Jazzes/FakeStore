const {ApiError} = require("../error/apiError");
const jwt = require('jsonwebtoken')

module.exports = function (role){
    return function (req, res, next) {
        try {
            if (!req.headers.authorization) {
                return next(ApiError.unauthorizated("Unauthorizated."))
            }
            const token = req.headers.authorization.split(" ")[1]
            if (!token) {
                return next(ApiError.unauthorizated("Unauthorizated."))
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (!role.includes(decoded.role)) {
                return next(ApiError.forbidden("You do not have permission."))
            }
            req.user = decoded
            next()
        } catch (e) {
            return next(ApiError.unauthorizated(e.message))
        }
    }
}