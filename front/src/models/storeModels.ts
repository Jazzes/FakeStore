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