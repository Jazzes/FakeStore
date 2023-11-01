import React, {FC} from 'react';
import {Car} from "../../../models/DataBaseModels";
import {imgUrl} from "../../../http/urls";
import compare from "../../../static/photos/compare.svg"
import comparechosen from "../../../static/photos/comparechosen.svg"
import cross from "../../../static/photos/cross.svg"
import {Link} from "react-router-dom";

interface IBasketCarCard{
    car: {
        carId: number,
        car: Car
    }
    compareArray: number[] | undefined
    addToCompare: (id: number) => void
    removeFromBasket: (id: number) => void
}

const BasketCarCard : FC<IBasketCarCard> = ({car, compareArray, removeFromBasket, addToCompare}) => {
    return (
        <div className="basketPage__card">
            <img onClick={() => {
                removeFromBasket(car.carId)
            }} src={cross} className="basketPage__cross"/>
            <div className="basketPage__card__flex">
                <Link className="basketPage__link" to={'/car/' + car.carId}><img className="basketPage__card__img" src={imgUrl + car.car.img} alt=""/></Link>
                <div className="basketPage__card__flexColumn">
                    <Link to={'/car/' + car.carId} className="basketPage__card__name">{car.car.name}</Link>

                    <div className="basketPage__card__flexBetween">
                        <img onClick={() => addToCompare(car.carId)}
                             className="basketPage__card__compare"
                             src={compareArray?.includes(car.carId) ? comparechosen : compare}
                             alt=""/>

                        <div className="bold">{car.car.price.toLocaleString()}$</div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BasketCarCard;