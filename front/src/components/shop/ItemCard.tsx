import React from 'react';
import {Car} from "../../models/DataBaseModels";
import "./itemCard.scss"

interface IItemCard{
    car: Car
}

const ItemCard = ({car} : IItemCard) => {
    const imgUrl = "http://localhost:5005/static/"
    return (
        <div className="itemCard__container">
            <img className="itemCard__image" src={imgUrl + car.img} alt=""/>
            <div className="itemCard__name">
                {car.name}
            </div>
            <div className="itemCard__info">

            </div>
        </div>
    );
};

export default ItemCard;