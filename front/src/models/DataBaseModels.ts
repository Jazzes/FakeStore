interface Sample{
    id: number,
    name: string,
}

export interface Car extends Sample{
    acceleration: number,
    price: number,
    img: string,
    engineId: number,
    brandId: number
}

export interface CarImages{
    id: number,
    img: string,
    carId: number
}

export interface CarInfo{
    id: number,
    horsepower: number,
    topspeed: number,
    engine: string,
    carId: number
}

export interface Brand extends Sample{
}

export interface Engine extends Sample{
}

export interface User{
    id: number,
    email: string,
    role: string
}