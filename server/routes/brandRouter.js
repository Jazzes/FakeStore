const Router = require('express')
const {BrandControl} = require('../routesControl/brandControl')
const auth = require('../middleware/middlewareRole')

const brandRouter = new Router()
const brandControl = new BrandControl()

brandRouter.post('/', auth('ADMIN'), brandControl.addBrand)
brandRouter.get('/', brandControl.getBrands)
brandRouter.delete('/delete', auth('ADMIN'), brandControl.deleteBrand)

module.exports = {brandRouter}