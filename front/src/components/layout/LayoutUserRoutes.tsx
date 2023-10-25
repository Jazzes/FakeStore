import React from 'react';
import {Navigate, Outlet, redirect} from "react-router-dom";
import {useAppSelector} from "../../store/hooks/redux";
import {userSlice} from "../../store/reducer/UserSlice";
import "./layout.scss"

const LayoutUserRoutes = () => {

    const {isAuth, role} = useAppSelector(state => state.userReducer)
    const {LogOut, LogIn} = userSlice.actions

    return (
        <>
            { isAuth ?
                    <Outlet />
                :
                <Navigate to={"login"}/>
            }
       </>
    );
};

export default LayoutUserRoutes;