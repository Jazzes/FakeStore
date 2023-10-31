import React from 'react';
import {Car} from "../../../models/DataBaseModels";
import "./itemCard.scss"
import {Link} from "react-router-dom";
import compare from "../../../static/photos/compare.svg"
import {imgUrl} from "../../../http/urls";

interface IItemCard {
    car: Car
    addToCompare: (id: number) => void
}

const ItemCard = ({car, addToCompare}: IItemCard) => {

    return (
        <div className="itemCard__container">
            <Link to={"/car/" + car.id}>
                <img className="itemCard__image" src={imgUrl + car.img} alt=""/>
            </Link>
            <div className="itemCard__name">
                {car.name}
            </div>
            <div className="itemCard__info">
                <div className="itemCard__info__column_1">
                    <div className="itemCard__info__char bold">
                        {car.price.toLocaleString()}$
                    </div>
                    <div className="itemCard__info__char">
                        price
                    </div>
                </div>
                <div className="itemCard__info__column_2">
                    <div className="itemCard__info__char bold">
                        {car.acceleration}
                    </div>
                    <div className="itemCard__info__char">
                        0-60 mph
                    </div>
                </div>
            </div>
            <Link to={"/car/" + car.id} className="itemCard__link">Check</Link>
            <img onClick={() => addToCompare(car.id)} className="itemCard__compare" src={compare} alt=""/>
        </div>
    );
};

export default ItemCard;