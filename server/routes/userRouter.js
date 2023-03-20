const Router = require('express')
const userRouter = new Router()
const {UserControl} = require('../routesControl/userContorl')

const userControl = new UserControl()

userRouter.post('/register', userControl.register)
userRouter.post('/login', userControl.login)
userRouter.get('/auth', userControl.auth)

module.exports = {userRouter}