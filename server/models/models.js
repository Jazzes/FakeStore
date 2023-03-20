const sequelize = require("../db")
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketCar = sequelize.define('basket_car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Car = sequelize.define('car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    speed060: {type: DataTypes.FLOAT, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const CarInfo = sequelize.define('car_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    horsepower: {type: DataTypes.INTEGER, allowNull: false},
    topspeed: {type: DataTypes.INTEGER, allowNull: false},
    engine: {type: DataTypes.STRING, allowNull: false},
})
const CarImages = sequelize.define('car_images', {
    img: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Engine = sequelize.define('engine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const EngineBrand = sequelize.define('engine_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketCar)
BasketCar.belongsTo(Basket)

Engine.hasMany(Car)
Car.belongsTo(Engine)

Car.hasMany(CarImages)
CarImages.belongsTo(Car)

Brand.hasMany(Car)
Car.belongsTo(Brand)

Car.hasMany(BasketCar)
BasketCar.belongsTo(Car)

Car.hasOne(CarInfo)
CarInfo.belongsTo(Car)

Engine.belongsToMany(Brand, {through: EngineBrand})
Brand.belongsToMany(Engine, {through: EngineBrand})

module.exports = {
    User, Basket, BasketCar, Brand, Engine, EngineBrand, CarInfo, Car, CarImages
}