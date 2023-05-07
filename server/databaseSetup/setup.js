const axios = require('axios')
const FormData = require('form-data')
const {brandsSetUp, enginesSetUp, carsSetUp, carsImagesSetUp, carsInfoSetUp} = require('./data')
const fs = require("fs");

const PORT = "3000"
const URL = "http://localhost"
const adminUser = {
    secretWord: process.env.SECRET_WORD,
    email: "admin@fake.com",
    password: "12345678"
}


const urlBrand = `${URL}:${PORT}/api/brand`
const urlEngine = `${URL}:${PORT}/api/engine`
const urlCar = `${URL}:${PORT}/api/car`
const urlCarImage = `${URL}:${PORT}/api/car/image`
const urlCarInfo = `${URL}:${PORT}/api/car/info`
const urlAdmin = `${URL}:${PORT}/api/user/register`



async function getAdminUser(email, password){
    return (await axios.post(urlAdmin, {
        email,
        password,
        secretword: `${adminUser.secretWord}`,
        role: "ADMIN"
    })).data.token
}


async function setupBrandEngine(token){
    for (let i of brandsSetUp){
        try{
            await axios.post(urlBrand, {
                name: i
            },{
                headers: {'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`}
            }).catch(e => {
                console.log(e.message)
            })
        } catch (e){
            console.log(e.message)
        }
    }
    for (let i of enginesSetUp){
        try{
            await axios.post(urlEngine, {
                name: i
            },{
                headers: {'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`}
            }).catch(e => {
                console.log(e.message)
            })
        } catch (e){
            console.log(e.message)
        }
    }
}

async function setupCars(token){
    for (let car of carsSetUp){
        try{
            const formData = new FormData()
            const imgOfCar = fs.createReadStream(`./carsimages/${car.img}`)
            formData.append('img', imgOfCar)
            formData.append('name', car.name)
            formData.append('acceleration', car.acceleration)
            formData.append('price', car.price)
            formData.append('brandId', car.brandId)
            formData.append('engineId', car.engineId)
            await axios.post(urlCar, formData, {
                headers: {"Content-Type": 'multipart/form-data',
                    Authorization: `Bearer ${token}`}
            }).catch(e => {
                console.log(e.message)
            })
        } catch (e){
            console.log(e.message)
        }
    }
}

async function setupImagesInfo(token){
    for (let car of carsImagesSetUp){
        try{
            const formData = new FormData()
            const imgOfCar = fs.createReadStream(`./carsimages/${car.img}`)
            formData.append('img', imgOfCar)
            formData.append('carId', car.carId)
            await axios.post(urlCarImage, formData, {
                headers: {"Content-Type": 'multipart/form-data',
                    Authorization: `Bearer ${token}`}
            }).catch(e => {
                console.log(e.message)
            })
        } catch (e){
            console.log(e.message)
        }
    }
    for (let car of carsInfoSetUp){
        try{
            await axios.post(urlCarInfo, {
                carId: car.carId,
                horsepower: car.horsepower,
                topspeed: car.topspeed,
                engine: car.engine,
            },{
                headers: {'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`}
            }).catch(e => {
                console.log(e.message)
            })
        } catch (e){
            console.log(e.message)
        }
    }
}


(async ()=>{
    const token = await getAdminUser(adminUser.email, adminUser.password)
    setupBrandEngine(token).then(()=>{
        setupCars(token).then(()=>{
            setupImagesInfo(token).then(()=>console.log("All items had successfully added!\nIf you get status code 404, that means any of items have already been added or something went wrong.")).catch(e => {e.message})
        }).catch(e => console.log(e.message))
    }).catch(e => console.log(e.message))
})()

