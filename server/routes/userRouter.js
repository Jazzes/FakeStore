const Router = require('express')
const userRouter = new Router()
const {UserControl} = require('../routesControl/userContorl')
const auth = require('../middleware/middlewareAuth')
const {check} = require('express-validator')

const userControl = new UserControl()

userRouter.post('/register', [
    check('email').isEmail(),
    check('password').isLength({min: 8})
], userControl.register)
userRouter.post('/login', userControl.login)
userRouter.get('/auth', auth, userControl.auth)
module.exports = {userRouter}