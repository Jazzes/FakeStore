const Router = require('express')
const apiRouter = new Router()
const {userRouter} = require('./userRouter')
const {brandRouter} = require('./brandRouter')
const {engineRouter} = require('./engineRouter')
const {carRouter} = require('./carRouter')
const {shopRouter} = require('./shopRouter')

apiRouter.use('/user', userRouter)
apiRouter.use('/car', carRouter)
apiRouter.use('/engine', engineRouter)
apiRouter.use('/brand', brandRouter)
apiRouter.use('/shop', shopRouter)

module.exports = {apiRouter}