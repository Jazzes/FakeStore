const jwt = require('jsonwebtoken')
const {ApiError} = require("../error/apiError");

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return next(ApiError.unauthorizated("Unauthorizated."))
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        if (decoded.role !== role) {
            return next(ApiError.forbidden("You do not have permission."))
        }
        req.user = decoded
        next()
    } catch (e) {
        return next(ApiError.badRequest(e.message))
    }
}