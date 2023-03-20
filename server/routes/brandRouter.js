const Router = require('express')
const {BrandControl} = require('../routesControl/brandControl')
const brandRouter = new Router()

const brandControl = new BrandControl()

brandRouter.post('/', brandControl.addBrand)
brandRouter.get('/', brandControl.getBrands)
brandRouter.delete('/delete', brandControl.deleteBrand)

module.exports = {brandRouter}