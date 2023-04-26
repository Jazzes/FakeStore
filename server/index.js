require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const {apiRouter} = require('./routes/index')
const {errorHandler} = require('./middleware/middlewareApiError')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', apiRouter)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: "Working!"})
})


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}


start()

