const Router = require('express')
const engineRouter = new Router()
const {EngineControl} = require('../routesControl/engineControl')
const auth = require("../middleware/middlewareRole");

const engineControl = new EngineControl()

engineRouter.post('/', auth(['ADMIN']), engineControl.addEngine)
engineRouter.get('/', engineControl.getEngines)
engineRouter.delete('/delete', auth(['ADMIN']), engineControl.deleteEngine)

module.exports = {engineRouter}