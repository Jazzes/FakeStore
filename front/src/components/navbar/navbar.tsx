import React from 'react';
import "./navbar.scss"
import {Link} from "react-router-dom";
import accountpage from "../../static/photos/account.svg"
import homepage from "../../static/photos/homepage.svg"
import shoppage from "../../static/photos/shoppage.svg"
import latestitemspage from "../../static/photos/latestitempage.svg"
import basketpage from "../../static/photos/basket.svg"
import comparepage from "../../static/photos/compare.svg"
import contactpage from "../../static/photos/contactpage.svg"
import beardman from "../../static/photos/beardman.svg"

interface INavbar{
    closeNavbar: () => void
}

const Navbar = ({closeNavbar} : INavbar) => {
    return (
        <div className="navbar">
            <div className="navbar__relative">
                <Link to="/account" onClick={()=>closeNavbar()}>
                    <img className="navbar__account" src={accountpage} alt="" />
                </Link>

                <Link className="navbar__block" to="/" onClick={()=>closeNavbar()}>
                    <img className="navbar__icon" alt="" src={homepage}/>
                    <span className="navbar__text"> Home page </span>
                </Link>

                <Link className="navbar__block" to="/shop" onClick={()=>closeNavbar()}>
                    <img className="navbar__icon" alt="" src={shoppage}/>
                    <span className="navbar__text"> Shopping </span>
                </Link>

                <Link className="navbar__block" to="/latest" onClick={()=>closeNavbar()}>
                    <img className="navbar__icon" alt="" src={latestitemspage}/>
                    <span className="navbar__text"> Latest items </span>
                </Link>

                <Link className="navbar__block" to="/basket" onClick={()=>closeNavbar()}>
                    <img className="navbar__icon" alt="" src={basketpage}/>
                    <span className="navbar__text"> Basket </span>
                </Link>

                <Link className="navbar__block" to="/compare" onClick={()=>closeNavbar()}>
                    <img className="navbar__icon" alt="" src={comparepage}/>
                    <span className="navbar__text"> Compare </span>
                </Link>

                <Link className="navbar__block" to="/contact" onClick={()=>closeNavbar()}>
                    <img className="navbar__icon" alt="" src={contactpage}/>
                    <span className="navbar__text"> Contact </span>
                </Link>

                <div className="navbar__beardman_block">
                    <img src={beardman} alt="" />
                    <span style={{marginLeft: "10px"}}> LisichkinX © </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;