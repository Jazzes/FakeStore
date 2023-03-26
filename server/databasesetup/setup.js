const axios = require('axios')
const FormData = require('form-data')
const {brands, engines, cars} = require('./data')

const PORT = 3000
const URL = "http://localhost"

const url_brand = `${URL}:${PORT}/api/brand`
const url_engine = `${URL}:${PORT}/api/engine`
const url_car = `${URL}:${PORT}/api/car`

async function setupBrands(){
    for (let i of brands){
        try{
            const resp = await axios.post(url_brand, {
                name: i
            },{
                headers: {'Content-Type': 'multipart/form-data'}
            })
            if (!resp){
                console.log("Something goes wrong with brand.")
            } else {
                console.log(`${i} successfully added`)
            }
        } catch (e){
            console.log(e.message)
        }
    }
}

async function setupEngines(){
    for (let i of engines){
        try{
            const resp = await axios.post(url_engine, {
                name: i
            },{
                headers: {'Content-Type': 'multipart/form-data'}
            })
            if (!resp){
                console.log("Something goes wrong with engine.")
            } else {
                console.log(`${i} successfully added`)
            }
        } catch (e){
            console.log(e.message)
        }
    }
}

async function setupCars(){
    for (let car of cars){
        try{
            const formData = new FormData()
            formData.append('img', car.img)
            formData.append('name', car.name)
            formData.append('acceleration', car.acceleration)
            formData.append('price', car.price)
            formData.append('brandId', car.brandId)
            formData.append('engineId', car.engineId)
            const resp = await axios.post(url_car, formData, {
                headers: formData.getHeaders()
            }).then().catch(e => {
                console.log(e)
            })
            if (!resp){
                console.log("Something goes wrong with car.")
            } else {
                console.log(`${car.name} successfully added`)
            }
        } catch (e){
            console.log(`${e.message}, ${car}`)
        }
    }
}

setupBrands()
setupEngines()
setupCars()