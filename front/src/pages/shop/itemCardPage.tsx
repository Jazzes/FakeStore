import React, {useEffect} from 'react';
import "./itemCardPage.scss"
import {useParams} from "react-router-dom";
import {carApi} from "../../store/services/ApiServices";
import {imgUrl} from "../../http/urls";
import powerCharacteristics from "../../static/photos/powercharacteristics.svg"

const ItemCardPage = () => {

    const {id} = useParams()

    const {data: car, isLoading: isLoadingCar, error: errorCar} = carApi.useFetchCarQuery(id!)

    return (
        <div className="commonContainer">
            {car &&
                <>
                    <img src={imgUrl + car.img} className="itemCardPage__mainPhoto"/>

                    <div className="itemCardPage__name bold">{car.name}</div>

                    <div className="itemCardPage__characteristics__cont">
                        <div className="itemCardPage__characteristics__cont__item">
                            <img src={powerCharacteristics} alt="" className=""/>
                            <div className="itemCardPage__characteristics__description">
                                <div className="itemCardPage__characteristics__description__item">
                                    0-60 mph: <span className="bold">{car.acceleration}</span>
                                </div>
                                <div className="itemCardPage__characteristics__description__item">
                                    Horse: <span className="bold">{car.car_info.horsepower} HP</span>
                                </div>
                                <div className="itemCardPage__characteristics__description__item">
                                    Engine: <span className="bold">{car.car_info.engine}</span>
                                </div>
                                <div className="itemCardPage__characteristics__description__item">
                                    Top speed: <span className="bold">{car.car_info.topspeed} mph</span>
                                </div>
                            </div>
                        </div>
                        <div className="itemCardPage__characteristics__cont__item">
                            <div className="itemCardPage__characteristics__column">
                                <div className="itemCardPage__characteristics__price">
                                    price: <span className="bold">{car.price.toLocaleString()}$</span>
                                </div>
                                <div className="itemCardPage__characteristics__buttons">
                                    <div className="itemCardPage__characteristics__button">Add to basket</div>
                                    <div className="itemCardPage__characteristics__button">Add to compare</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    );
};

export default ItemCardPage;