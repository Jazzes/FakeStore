interface Car{
    id: number,
    name: string,
    acceleration: number,
    price: number,
    img: string,
    engineId: number,
    brandId: number
}

interface CarImages{
    id: number,
    img: string,
    carId: number
}

interface CarInfo{
    id: number,
    horsepower: number,
    topspeed: number,
    engime: string,
    carId: number
}

export type {Car, CarInfo, CarImages}