import {Car, User} from "./DataBaseModels";

export interface ICarsResponse{
    count: number,
    rows: Car[]
}

export interface UserState extends User{
    isAuth: boolean,
}