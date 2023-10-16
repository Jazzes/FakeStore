import React, {useEffect, useState} from 'react';
import "./shopPage.scss"
import arrowDowm from "../../static/photos/arrow.svg"
import {Car} from "../../models/DataBaseModels";
import axios from "axios";
import {carURL} from "../../http/urls";
import ItemCard from "../../components/shop/ItemCard";
import ItemsPage from "../../components/shop/itemsPage";
import LoadingItemsCard from "../../components/shop/LoadingItemsCard";
import {useSearchParams} from "react-router-dom";

interface ICarsResposne{
    count: number,
    rows: Car[]
}

const ShopPage = () => {

    const initialStateCar = {
        count: 0,
        rows: []
    }
    const [cars, setCars] = useState<ICarsResposne>(initialStateCar)
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const addToCompare = (id: number) => {

    }

    const getCars = async () => {
        try {
            const carsResponse = await axios.get<ICarsResposne>(carURL)
            setCars(carsResponse.data)
        } catch (e) {
            
        }
    }

    useEffect( () => {
        getCars().then( () => {
            setLoading(false)
        })
    }, []);

    return (
        <div className="commonContainer">
            <div className="shopPage__sort">
                <div className="shopPage__sort__item">BRANDS</div>
                <div className="shopPage__sort__item">ENGINE</div>
                <div className="shopPage__sort__item">PRICE</div>
                <div className="shopPage__sort__item">SORT <img style={{marginLeft: 5}} src={arrowDowm} alt=""/></div>
            </div>
            {loading ?
                <div className="shopPage__cards">
                    <LoadingItemsCard />
                    <LoadingItemsCard />
                    <LoadingItemsCard />
                    <LoadingItemsCard />
                    <LoadingItemsCard />
                    <LoadingItemsCard />
                </div>
                :
                <>
                    <div className="shopPage__cards">
                        {cars.rows.map(car =>
                            <ItemCard addToCompare={addToCompare} car={car} key={car.id} />
                        )}
                    </div>

                    <ItemsPage searchParams={searchParams} count={cars.count}/>
                </>
            }
        </div>
    )
};

export default ShopPage;