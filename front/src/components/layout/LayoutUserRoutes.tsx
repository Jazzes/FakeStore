import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from "../../store/hooks/redux";
import "./layout.scss"

const LayoutUserRoutes = () => {

    const {isAuth} = useAppSelector(state => state.userReducer)

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