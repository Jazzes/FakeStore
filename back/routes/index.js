const Router = require('express')
const apiRouter = new Router()
const {userRouter} = require('./userRouter')
const {brandRouter} = require('./brandRouter')
const {engineRouter} = require('./engineRouter')
const {carRouter} = require('./carRouter')

apiRouter.use('/user', userRouter)
apiRouter.use('/car', carRouter)
apiRouter.use('/engine', engineRouter)
apiRouter.use('/brand', brandRouter)

module.exports = {apiRouter}