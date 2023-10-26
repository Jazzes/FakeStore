import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../models/DataBaseModels";
import {UserState} from "../../models/storeModels";

const initialState : UserState = {
    isAuth: false,
    email: '',
    role: '',
    id: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LogIn(state, action: PayloadAction<User>){
            state.isAuth = true
            state.email = action.payload.email
            state.role = action.payload.role
            state.id = action.payload.id
        },
        LogOut(state){
            state.email = ''
            state.role = ''
            state.id = 0
            state.isAuth = false
        }
    }
})