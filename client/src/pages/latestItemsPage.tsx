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
import elonmusk from "../static/photos/elonmuskframe.jpg"

const LatestItemsPage = () => {
    return (
        <>
            <div className="latestpage__container">
                <div className="lastpage__fullblock">
                    <div className="latestpage__title">
                        Get the Most<br/>
                        Out of Life
                    </div>
                    <div className="latestpage__block"></div>
                    <div className="latestpage__afterTitle">
                        Stop for a moment enjoying the beauty
                    </div>
                    <div className="latestpage__naturePhotos">

                        <img className="latestpage__naturePhoto latestpage__nature1" src={nature1} alt="" />
                        <img className="latestpage__naturePhoto latestpage__nature2" src={nature2} alt="" />
                        <img className="latestpage__naturePhoto latestpage__nature3" src={nature3} alt="" />
                        <img className="latestpage__naturePhoto latestpage__nature4" src={nature4} alt="" />
                        <img className="latestpage__naturePhoto latestpage__nature5" src={nature5} alt="" />
                        <img className="latestpage__naturePhoto latestpage__nature6" src={nature6} alt="" />
                        <img className="latestpage__naturePhoto latestpage__nature7" src={nature7} alt="" />
                        <img className="latestpage__naturePhoto latestpage__nature8" src={nature8} alt="" />
                    </div>
                </div>
                <div className="lastpage__between"></div>

                <div className="lastpage__fullblock">
                    <div className="lastpage__positioning">
                        <div className="lastpage__elonmusk_text">
                            Whenever you want to arrive in style, enjoy the luxury of an electric ride with Tesla Model X.<br/>
                            <br/>
                            From the S to the Roadster, Tesla brought a lot of surprises with every new car it develops.<br/>
                        </div>
                        <img className="lastpage__elonmusk_photo" alt="" src={elonmusk} />
                    </div>
                </div>



            </div>
        </>
    );
};

export default LatestItemsPage;