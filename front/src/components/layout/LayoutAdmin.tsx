import React from 'react';
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../../store/hooks/redux";
import "./layout.scss"
import NotFoundPage from "../../pages/notFoundPage/notFoundPage";

const LayoutUserRoutes = () => {

    const {role} = useAppSelector(state => state.userReducer)

    return (
        <>
            {role === "ADMIN" ?
                <Outlet/>
                :
                <NotFoundPage/>
            }
        </>
    );
};

export default LayoutUserRoutes;