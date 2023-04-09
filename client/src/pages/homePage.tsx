import React from 'react';
import logo from "../static/photos/FakeInscription.svg"
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="mainpage__container">
                <img alt="" className="mainpage__logo" src={logo} />
                <div className="mainpage__text">Store</div>
                <div className="mainpage__block"></div>
                <div className="mainpage__description">
                    Fast. Secure. User-friendly.<br/>
                    Make purchases with unique service.<br/>
                    Perfect from beginning to end.
                </div>

                <div className="mainpage__wrapper_button">
                    <Link to="/shop" className="borderButton mainpage__button">Shop now</Link>
                    <Link to="/latest" className="borderButton mainpage__button">Latest items</Link>
                </div>
            </div>

        </>
    );
};

export default HomePage;