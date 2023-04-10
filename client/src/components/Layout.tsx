import React, {useState} from 'react';
import "../csscomponents/layout.scss"
import {Link, Outlet} from 'react-router-dom'
import logo from "../static/photos/logo.svg"
import basket from "../static/photos/basket.svg"
import find from "../static/photos/find.svg"

const Layout = () => {

    const [active, setActive] = useState(false)
    const burgerActive = active ? "burger-menu burger-activated" : "burger-menu"


    return (
        <div className="wrapper">
            <div className="nav">
                <Link to="/" className="logoImage">
                    <img className="logoSize" alt="" src={logo}/>
                </Link>
                <div className="nav__right_side">
                    <div className="findLogo">
                        <img className="findLogoSize" alt="" src={find}/>
                    </div>
                    <Link className="basketLogo" to="/basket">
                        <img className="basketLogoSize" alt="" src={basket}/>
                    </Link>
                    <div className={burgerActive} onClick={ () => {setActive(active => !active)} }>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="background"></div>
                < Outlet />
            </div>

            <div className="footer">
                <Link to='/contact' className="linkToContact">Contact</Link>
                <h1 className="linkToOfficial">Lisichkin © 2023</h1>
            </div>
        </div>

    );
};

export default Layout;