import React from 'react';
import "./backButton.scss"
import arrow from "../../static/photos/arrow.svg"
import {useNavigate} from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate()
    return (
        <div className="backButton__container">
            <div className="backButton__arrowContainer" onClick={() => {
                navigate(-1)
            }}>
                <img src={arrow} alt="" className="backButton__arrow"/>
            </div>
        </div>
    );
};

export default BackButton;