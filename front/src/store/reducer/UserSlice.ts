import {User} from "../../models/DataBaseModels";
import {createSlice} from "@reduxjs/toolkit";


interface UserState {
    users: User[]
    isLoading: boolean
    error: string
}

const initialState : UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {

    }
})

export default userSlice