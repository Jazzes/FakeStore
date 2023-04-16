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
import tesla1 from "../static/photos/teslamodelx1.jpg"
import tesla2 from "../static/photos/teslamodelx2.jpg"
import tesla3 from "../static/photos/teslamodelx3.jpg"
import mercframe from "../static/photos/mercbenzframe.jpg"
import merc1 from "../static/photos/mercbenzavtr1.jpg"
import merc2 from "../static/photos/mercbenzavtr2.jpg"
import merc3 from "../static/photos/mercbenzavtr3.jpg"
import rolcframe from "../static/photos/rollcroyceframe.jpg"
import rolc1 from "../static/photos/rollcroyce1.jpg"
import rolc2 from "../static/photos/rollcroyce2.jpg"
import rolc3 from "../static/photos/rollcroyce3.jpg"
import Slider from "../components/slider";
import "../csscomponents/slider.scss"
import {LazyLoadImage} from "react-lazy-load-image-component";

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

                        <LazyLoadImage className="latestpage__naturePhoto latestpage__nature1" src={nature1} alt="" />
                        <LazyLoadImage className="latestpage__naturePhoto latestpage__nature2" src={nature2} alt="" />
                        <LazyLoadImage className="latestpage__naturePhoto latestpage__nature3" src={nature3} alt="" />
                        <LazyLoadImage className="latestpage__naturePhoto latestpage__nature4" src={nature4} alt="" />
                        <LazyLoadImage className="latestpage__naturePhoto latestpage__nature5" src={nature5} alt="" />
                        <LazyLoadImage className="latestpage__naturePhoto latestpage__nature6" src={nature6} alt="" />
                        <LazyLoadImage className="latestpage__naturePhoto latestpage__nature7" src={nature7} alt="" />
                        <LazyLoadImage className="latestpage__naturePhoto latestpage__nature8" src={nature8} alt="" />
                    </div>
                </div>

                <div className="lastpage__between"></div>

                <div className="lastpage__fullblock">
                    <div className="lastpage__positioning">
                        <div className="lastpage__block_text">
                            Whenever you want to arrive in style, enjoy the luxury of an electric ride with Tesla Model X.<br/>
                            <br/>
                            From the S to the Roadster, Tesla brought a lot of surprises with every new car it develops.
                        </div>
                        <LazyLoadImage className="lastpage__block_photo" alt="" src={elonmusk} />
                    </div>
                </div>

                <Slider image={[tesla1, tesla2, tesla3]} autoPlay={true} autoPlayTime={7500}
                        header={'Absolutely. Positively. Perfect.'}
                        title={'Tesla Model X'}
                />

                <div className="lastpage__fullblock">
                    <div className="lastpage__positioning_reverse">
                        <LazyLoadImage className="lastpage__block_photo" alt="" src={mercframe} />

                        <div className="lastpage__block_text">
                            In collaboration with the AVATAR films, Mercedes-Benz is developing a vision for the future of mobility: VISION AVTR.<br/>
                            <br/>
                            Vision AVTR creates a uniquely august driving experience that defines the future of luxury motoring.
                        </div>
                    </div>
                </div>


                <Slider image={[merc1, merc2, merc3]} autoPlay={true} autoPlayTime={7500}
                        header={'Welcome to the future.'}
                        title={'Mercedes-Benz VISION AVTR'}
                />

                <div className="lastpage__fullblock">
                    <div className="lastpage__positioning">
                        <div className="lastpage__block_text">
                            The Rolls-Royce 103EX is a limited edition model based on the Ghost. The 103EX is equipped with a high power engine and can reach speeds up to 910km/hr.<br/>
                            <br/>
                            It also comes equipped with a black and gold interior that's incredibly luxurious and comfortable.
                        </div>
                        <LazyLoadImage className="lastpage__block_photo" alt="" src={rolcframe} />
                    </div>
                </div>

                <Slider image={[rolc1, rolc2, rolc3]} autoPlay={true} autoPlayTime={7500}
                        header={'Feel the quality.'}
                        title={'Rolls-Royce 103EX'}
                />

            </div>
        </>
    );
};

export default LatestItemsPage;