const Router = require('express')
const {CarControl} = require('../routesControl/carControl')
const carRouter = new Router()


const carControl = new CarControl()

carRouter.post('/', carControl.addCar)
carRouter.post('/info', carControl.addInfo)
carRouter.post('/images', carControl.addImages)
carRouter.get('/', carControl.getCars)
carRouter.get('/:id', carControl.getCar)
carRouter.delete('/delete', carControl.deleteCar)

module.exports = {carRouter}