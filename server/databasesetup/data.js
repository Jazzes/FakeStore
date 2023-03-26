const fs = require("fs")
const FormData = require('form-data')

const file = fs.createReadStream('./carsimages/teslamodelx1.jpg')
const formData = new FormData()
formData.append('file', file)

const engines = ['gasoline', 'electric']
const brands = ['Tesla', 'Mercedes-Benz', 'Rolls-Royce', 'Ferrari', 'Bugatti',
    'Toyota', 'Bentley', 'Rimac', 'Nissan', 'SSC', 'Aston Martin', 'Lamborghini']
const cars = [
    {
        name: "Tesla Model X",
        acceleration: 38,
        price: 99990,
        brandId: 1,
        engineId: 2,
        img: formData,
    }
]

module.exports = {engines, brands, cars}