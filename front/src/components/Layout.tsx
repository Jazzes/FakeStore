import React, {useEffect, useState} from 'react';
import "../csscomponents/layout.scss"
import {Link, Outlet} from 'react-router-dom'
import logo from "../static/photos/logo.svg"
import basket from "../static/photos/basket.svg"
import find from "../static/photos/find.svg"
import Navbar from "./navbar";

const Layout = () => {
    const [hideNav, setHideNav] = useState(false)
    const [active, setActive] = useState(false)
    const burgerActive = active ? "burger-menu burger-activated" : "burger-menu"

    const closeNavBar = () => setActive(false)

    useEffect(() => {
        let prevScrollPos: number = window.scrollY || document.documentElement.scrollTop

        const handleScroll = () => {
            const currentScrollPos = window.scrollY || document.documentElement.scrollTop
            if (prevScrollPos < currentScrollPos - 80) {
                setHideNav(true)
                prevScrollPos = currentScrollPos
                setActive(false)
            }
            if (prevScrollPos > currentScrollPos + 80) {
                setHideNav(false)
                prevScrollPos = currentScrollPos
            }
        }

        window.addEventListener('scroll', handleScroll)

    }, [])


    return (
        <div className="wrapper">
            <div className="nav_visible">
                <div className={hideNav ? "nav nav_unvisible" : "nav"}>
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
                        <div className={burgerActive} onClick={() => {
                            setActive(active => !active)
                        }}>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={active ? hideNav ? "nav_show nav_show_unvisible" : "nav_show" : "nav_show nav_show_noshow"}>
                    <div className={active ? "nav_active_def" : "nav_active_def nav_active_false"}>
                        <Navbar closeNavbar={closeNavBar}/>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="background"></div>
                <Outlet/>
            </div>

            <div className="footer">
                <Link to='/contact' className="linkToContact">Contact</Link>
                <h1 className="linkToOfficial">LisichkinX © 2023</h1>
            </div>
        </div>

    );
};

export default Layout;