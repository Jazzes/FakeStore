import React, {FC} from 'react';
import {CarWithInfo} from "../../../models/storeModels";
import {imgUrl} from "../../../http/urls";
import {Link} from "react-router-dom";
import cross from "../../../static/photos/cross.svg"

interface ICompareCard {
    car: CarWithInfo
    removeFromCompare: (id: number) => void
}

const CompareCard: FC<ICompareCard> = ({car, removeFromCompare}) => {
    return (
        <div className="comparePage__card">

            <img src={cross} alt="" onClick={() => {
                removeFromCompare(car.id)
            }} className="comparePage__cross"/>

            <div className="comparePage__card__view">
                <Link to={'/car/' + car.id}>
                    <img className="comparePage__card__img" src={imgUrl + car.img} alt=""/>
                    <div className="comparePage__card__name">{car.name}</div>
                </Link>
            </div>
            <div className="comparePage__card__info">
                <div className="comparePage__card__item">0-60 mph: <span className="bold">{car.acceleration}s</span>
                </div>
                <div className="comparePage__card__item">Horse: <span className="bold">{car.car_info.horsepower}</span>
                </div>
                <div className="comparePage__card__item">Engine: <span className="bold">{car.car_info.engine}</span>
                </div>
                <div className="comparePage__card__item">Top speed: <span
                    className="bold">{car.car_info.topspeed}</span></div>
                <div className="comparePage__card__item bold">{car.price.toLocaleString()}$</div>
            </div>

        </div>
    );
};

export default CompareCard;