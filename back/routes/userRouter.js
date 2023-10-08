const Router = require('express')
const userRouter = new Router()
const {UserControl} = require('../routesControl/userContorl')
const auth = require('../middleware/middlewareRole')
const {check} = require('express-validator')

const userControl = new UserControl()

userRouter.post('/register', [
    check('email').isEmail(),
    check('password').isLength({min: 8})
], userControl.register)
userRouter.post('/login', userControl.login)
userRouter.get('/auth', auth(["USER", "ADMIN"]), userControl.auth)
module.exports = {userRouter}