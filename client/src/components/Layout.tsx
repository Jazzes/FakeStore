import React from 'react';
import "../csscomponents/layout.scss"
import {Link, Outlet} from 'react-router-dom'
import logo from "../static/photos/logo.svg"
import basket from "../static/photos/basket.svg"

const Layout = () => {
    return (
        <div className="wrapper">
            <div className="nav">
                <Link to="/" className="logoImage">
                    <img src={logo}/>
                </Link>
                <div className="">
                    <Link to="/basket">
                        <img src={basket}/>
                    </Link>
                </div>
            </div>

            <div className="main">
                < Outlet />
            </div>

            <div className="footer">
                <Link to='/contact' className="linkToContact">Contact</Link>
                <div className="linkToOfficial">Lisichkin © 2023</div>
            </div>
        </div>

    );
};

export default Layout;