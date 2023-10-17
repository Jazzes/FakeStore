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
        LogInOut(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload
        },
    }
})