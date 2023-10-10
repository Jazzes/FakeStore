import React from 'react';
import "./contactPage.scss"
import lislogo from "../../static/photos/lislogo.svg"
import gmail from "../../static/photos/gmail.svg"

const ContactPage = () => {
    return (
        <>
            <div className="contactContainer">
                <div className="contactContainer__Title">
                    You have a business idea? Connect me.
                </div>
                <div className="contactContainer__Connect">
                    <div className="contactContainer__Connect__Item1">
                        <img src={lislogo} className="lislogo" alt="" />
                        <div className="contactContainer__Connect__Text">LisichkinX's Website (coming soon)</div>
                    </div>
                    <div className="contactContainer__Connect__Item2">
                        <img src={gmail} className="gmail" alt="" />
                        <a href="mailto:j4zzes@gmail.com" className="contactContainer__Connect__Text">j4zzes@gmail.com</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;