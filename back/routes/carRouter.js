const Router = require('express')
const {CarControl} = require('../routesControl/carControl')
const auth = require("../middleware/middlewareRole");
const carRouter = new Router()

const carControl = new CarControl()

carRouter.post('/', auth(['ADMIN']), carControl.addCar)
carRouter.post('/info', auth(['ADMIN']), carControl.addInfo)
carRouter.post('/image', auth(['ADMIN']), carControl.addImages)
carRouter.get('/', carControl.getCars)
carRouter.get('/:id', carControl.getCar)
carRouter.delete('/delete', auth(['ADMIN']), carControl.deleteCar)

module.exports = {carRouter}