const sequelize = require("../db")
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
}, )

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
}, )

const BasketCar = sequelize.define('basket_car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
}, {timestamps: false})

const Compare = sequelize.define('compare', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
}, )

const CompareCar = sequelize.define('compare_car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
}, {timestamps: false})

const Car = sequelize.define('car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    acceleration: {type: DataTypes.FLOAT, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
}, )

const CarInfo = sequelize.define('car_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    horsepower: {type: DataTypes.INTEGER, allowNull: false},
    topspeed: {type: DataTypes.INTEGER, allowNull: false},
    engine: {type: DataTypes.STRING, allowNull: false},
}, )

const CarImages = sequelize.define('car_images', {
    img: {type: DataTypes.STRING, unique: true, allowNull: false},
}, )

const Engine = sequelize.define('engine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
}, )

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
}, )



User.hasOne(Basket)
Basket.belongsTo(User)

User.hasOne(Compare)
Compare.belongsTo(User)

Basket.hasMany(BasketCar)
BasketCar.belongsTo(Basket)

Compare.hasMany(CompareCar)
CompareCar.belongsTo(Compare)

Engine.hasMany(Car)
Car.belongsTo(Engine)

Brand.hasMany(Car)
Car.belongsTo(Brand)

Car.hasMany(CarImages, {
    onDelete: "CASCADE"
})
CarImages.belongsTo(Car)

Car.hasMany(BasketCar, {
    onDelete: "CASCADE"
})
BasketCar.belongsTo(Car)

Car.hasMany(CompareCar, {onDelete: "CASCADE"})
CompareCar.belongsTo(Car)

Car.hasOne(CarInfo, {onDelete: "CASCADE"})
CarInfo.belongsTo(Car)

module.exports = {
    User, Basket, BasketCar, Brand, Engine, CarInfo, Car, CarImages, CompareCar, Compare
}