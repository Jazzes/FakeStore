const enginesSetUp = ['Gasoline', 'Electric']

const brandsSetUp = ['Tesla', 'Mercedes-Benz', 'Rolls-Royce', 'Ferrari', 'Bugatti',
    'Toyota', 'Bentley', 'Rimac', 'Nissan', 'SSC', 'Aston Martin', 'Lamborghini']

const carsSetUp = [
    {
        name: "Tesla Model X",
        acceleration: 38,
        price: 99990,
        brandId: 1,
        engineId: 2,
        img: "teslamodelx1.jpg",
    },
    {
        name: "Mercedes-Benz VISION AVTR",
        acceleration: 20,
        price: 4099000,
        brandId: 2,
        engineId: 2,
        img: "mercedesbenzvisionavtr1.jpg",
    },
    {
        name: "Rolls-Royce 103EX",
        acceleration: 21,
        price: 29990000,
        brandId: 3,
        engineId: 2,
        img: "rollsroyce103ex1.jpg",
    },
    {
        name: "Ferrari SF90 Stradale",
        acceleration: 25,
        price: 549000,
        brandId: 4,
        engineId: 1,
        img: "ferrarisf90stradale1.jpg",
    },
    {
        name: "Ferrari Enzo",
        acceleration: 27,
        price: 3059000,
        brandId: 4,
        engineId: 1,
        img: "ferrarienzo1.jpg",
    },
    {
        name: "Bugatti La Voiture Noire",
        acceleration: 24,
        price: 40590000,
        brandId: 5,
        engineId: 1,
        img: "bugattilavoiturenoire1.jpg",
    },
    {
        name: "Toyota Supra GR",
        acceleration: 36,
        price: 129990,
        brandId: 6,
        engineId: 1,
        img: "toyotasupragr1.jpg",
    },
    {
        name: "Bentley Continental GT",
        acceleration: 34,
        price: 249990,
        brandId: 7,
        engineId: 1,
        img: "bentleycontinentalgt1.jpg",
    },
    {
        name: "Rimac Nevera",
        acceleration: 19,
        price: 2290000,
        brandId: 8,
        engineId: 2,
        img: "rimacnevera1.jpg",
    },
    {
        name: "Nissan GT-R",
        acceleration: 29,
        price: 219990,
        brandId: 9,
        engineId: 1,
        img: "nissangtr1.jpg",
    },
    {
        name: "SSC Tuatara",
        acceleration: 25,
        price: 1690000,
        brandId: 10,
        engineId: 1,
        img: "ssctuatara1.jpg",
    },
    {
        name: "Aston Martin Valkyrie",
        acceleration: 26,
        price: 2990000,
        brandId: 11,
        engineId: 1,
        img: "astonmartinvalkyrie1.jpg",
    },
    {
        name: "Bugatti Chiron",
        acceleration: 24,
        price: 3499000,
        brandId: 5,
        engineId: 1,
        img: "bugattichiron1.jpg",
    },
    {
        name: "Lamborghini Aventador",
        acceleration: 29,
        price: 799000,
        brandId: 12,
        engineId: 1,
        img: "lamborghiniaventador1.jpg",
    }
]

const carsInfoSetUp = [
    {
        carId: 1,
        horsepower: 670,
        topspeed: 149,
        engine: "dual-motor base SUV"
    },
    {
        carId: 2,
        horsepower: 1300,
        topspeed: 225,
        engine: "electric motor"
    },
    {
        carId: 3,
        horsepower: 1250,
        topspeed: 205,
        engine: "electric motor"
    },
    {
        carId: 4,
        horsepower: 780,
        topspeed: 211,
        engine: "4.0 l twin-turbocharged V8"
    },
    {
        carId: 5,
        horsepower: 700,
        topspeed: 231,
        engine: "6.0 l V12"
    },
    {
        carId: 6,
        horsepower: 1500,
        topspeed: 255,
        engine: "turbo 8.0 l W16"
    },
    {
        carId: 7,
        horsepower: 382,
        topspeed: 155,
        engine: "3.0 l turbocharged 6-cylinder"
    },
    {
        carId: 8,
        horsepower: 630,
        topspeed: 208,
        engine: "6.0 l W12"
    },
    {
        carId: 9,
        horsepower: 1900,
        topspeed: 258,
        engine: "four electric motors"
    },
    {
        carId: 10,
        horsepower: 570,
        topspeed: 200,
        engine: "3.8 l V6"
    },
    {
        carId: 11,
        horsepower: 1890,
        topspeed: 295,
        engine: "5.9l V8"
    },
    {
        carId: 12,
        horsepower: 1140,
        topspeed: 220,
        engine: "6.5 l V12"
    },
    {
        carId: 13,
        horsepower: 1500,
        topspeed: 305,
        engine: "8.0 l W16"
    },
    {
        carId: 14,
        horsepower: 740,
        topspeed: 220,
        engine: "6.5 l V12"
    },
]

const carsImagesSetUp = []

for (let i in carsSetUp){
    for (let j = 2; j !== 5; ++j){
        carsImagesSetUp.push({
            carId: Number(i) + 1,
            img: carsSetUp[i].img.replace('1.jpg', `${j}.jpg`)
        })
    }
}

module.exports = {enginesSetUp, brandsSetUp, carsSetUp, carsInfoSetUp, carsImagesSetUp}