import {Car, CarImages, CarInfo, User} from "./DataBaseModels";

export interface ICarsResponse{
    count: number,
    rows: Car[]
}

export interface ICarResponse extends Car{
    car_images: CarImages[]
    car_info: CarInfo
}

export interface UserState extends User{
    isAuth: boolean,
}

export interface CompareBasketDetails{
    success: boolean
    status: string
}

export interface CompareCarsId{
    compareId: Array<{carId: number}>
}

export interface BasketCarsId{
    count: number,
    rows: Array<{carId: number}>
}

export interface CarWithInfo extends Car{
    car_info: CarInfo
}

export interface CompareCarsItems{
    compareItems: Array<{
        carId: number,
        car: CarWithInfo
    }>
}

export interface BasketCarsItems{
    count: number,
    rows: Array<{
        carId: number,
        car: Car
    }>
}