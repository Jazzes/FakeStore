import React, {useEffect, useState} from 'react';
import "./shopPage.scss"
import arrowDowm from "../../static/photos/arrow.svg"
import {Car} from "../../models/DataBaseModels";
import axios from "axios";
import {carURL} from "../../http/urls";
import ItemCard from "../../components/shop/ItemCard";

interface ICarsResposne{
    count: number,
    rows: Car[]
}

const ShopPage = () => {

    const initialState = {
        count: 0,
        rows: []
    }

    const [cars, setCars] = useState<ICarsResposne>(initialState)

    const getCars = async () => {
        const carsResponse = await axios.get<ICarsResposne>(carURL)
        setCars(carsResponse.data)
    }

    useEffect( () => {
        getCars()
    }, []);

    return (
        <div className="commonContainer">
            <div className="shopPage__sort">
                <div className="shopPage__sort__item">BRANDS</div>
                <div className="shopPage__sort__item">ENGINE</div>
                <div className="shopPage__sort__item">PRICE</div>
                <div className="shopPage__sort__item">SORT <img style={{marginLeft: 5}} src={arrowDowm} alt=""/></div>
            </div>
            <div className="shopPage__cards">
                {cars.rows.map(car =>
                    <ItemCard car={car} key={car.id} />
                )}
            </div>
        </div>
    )
};

export default ShopPage;