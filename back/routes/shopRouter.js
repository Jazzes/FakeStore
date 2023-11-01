const Router = require('express')
const {ShopControl} = require('../routesControl/shopConrol')
const auth = require('../middleware/middlewareRole')

const shopRouter = new Router()
const shopControl = new ShopControl()

shopRouter.get('/basket', auth(["USER", "ADMIN"]),  shopControl.getBasketItems)
shopRouter.get('/basketid', auth(["USER", "ADMIN"]),  shopControl.getBasketIds)
shopRouter.post('/basket', auth(["USER", "ADMIN"]),  shopControl.addOrDeleteBasketCar)
shopRouter.get('/compare', auth(["USER", "ADMIN"]),  shopControl.getCompareItems)
shopRouter.get('/compareid', auth(["USER", "ADMIN"]),  shopControl.getCompareIds)
shopRouter.post('/compare', auth(["USER", "ADMIN"]),  shopControl.addOrDeleteCompareCar)
module.exports = {shopRouter}