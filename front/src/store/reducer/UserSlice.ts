import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserState} from "../../models/storeModels";

const initialState : UserState = {
    isAuth: false,
    email: '',
    role: '',
    id: 0
}

export const userSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        LogIn(state, action: PayloadAction<UserState>){
            state.isAuth = action.payload.isAuth
            state.email = action.payload.email
            state.role = action.payload.role
            state.id = action.payload.id
        },
        LogOut(state, action: PayloadAction<boolean>){
            state.email = ''
            state.role = ''
            state.id = 0
            state.isAuth = action.payload
        }
    }
})