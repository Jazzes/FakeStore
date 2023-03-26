const axios = require('axios')
const {brands, engines} = require('./data')

const PORT = 3000
const URL = "http://localhost"

const url_brand = `${URL}:${PORT}/api/brand`
const url_enigne = `${URL}:${PORT}/api/engine`
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
                console.log("Something goes wrong with brands.")
            }
            console.log(`${i} successfully added`)
        } catch (e){
            console.log(e.message)
        }
    }
}

async function setupEngines(){
    for (let i of engines){
        try{
            const resp = await axios.post(url_enigne, {
                name: i
            },{
                headers: {'Content-Type': 'multipart/form-data'}
            })
            if (!resp){
                console.log("Something goes wrong with brands.")
            }
            console.log(`${i} successfully added`)
        } catch (e){
            console.log(e.message)
        }
    }
}

async function setupCars(){
    for (let i of engines){
        try{
            const resp = await axios.post(url_enigne, {
                name: i
            },{
                headers: {'Content-Type': 'multipart/form-data'}
            })
            if (!resp){
                console.log("Something goes wrong with brands.")
            }
            console.log(`${i} successfully added`)
        } catch (e){
            console.log(`${e.message}, ${i}`)
        }
    }
}

setupBrands()
setupEngines()
setupCars()