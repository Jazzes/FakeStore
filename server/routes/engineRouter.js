const Router = require('express')
const engineRouter = new Router()
const {EngineControl} = require('../routesControl/engineControl')

const engineControl = new EngineControl()

engineRouter.post('/', engineControl.addEngine)
engineRouter.get('/', engineControl.getEngines)
engineRouter.delete('/delete', engineControl.deleteEngine)

module.exports = {engineRouter}