import React from 'react';
import "../csscomponents/latestItemsPage.scss"
import nature1 from "../static/photos/nature1.jpg"
import nature2 from "../static/photos/nature2.jpg"
import nature3 from "../static/photos/nature3.jpg"
import nature4 from "../static/photos/nature4.jpg"
import nature5 from "../static/photos/nature5.jpg"
import nature6 from "../static/photos/nature6.jpg"
import nature7 from "../static/photos/nature7.jpg"
import nature8 from "../static/photos/nature8.jpg"

const LatestItemsPage = () => {
    return (
        <>
            <div className="latestpage__container">
                <div className="latestpage__title">
                    Get the Most<br/>
                    Out of Life
                </div>
                <div className="latestpage__block"></div>
                <div className="latestpage__afterTitle">
                    Stop for a moment enjoying the beauty
                </div>
                <div className="latestpage__naturePhotos">
                    <img className="latestpage__naturePhoto" src={nature1} alt="" />
                    <img className="latestpage__naturePhoto" src={nature2} alt="" />
                    <img className="latestpage__naturePhoto" src={nature3} alt="" />
                    <img className="latestpage__naturePhoto" src={nature4} alt="" />
                    <img className="latestpage__naturePhoto" src={nature5} alt="" />
                    <img className="latestpage__naturePhoto" src={nature6} alt="" />
                    <img className="latestpage__naturePhoto" src={nature7} alt="" />
                    <img className="latestpage__naturePhoto" src={nature8} alt="" />
                </div>

            </div>
        </>
    );
};

export default LatestItemsPage;