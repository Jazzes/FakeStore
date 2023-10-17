import React, {useEffect, useState} from 'react';
import "./shopPage.scss"
import arrowDowm from "../../static/photos/arrow.svg"
import ItemCard from "../../components/shopPage/carCards/ItemCard";
import ItemsPage from "../../components/shopPage/carCards/itemsPage";
import LoadingItemsCard from "../../components/shopPage/carCards/LoadingItemsCard";
import {useSearchParams} from "react-router-dom";
import {carApi} from "../../store/services/ApiServices";
import FailedToFetch from "../../components/error/FailedToFetch";
import BrandsPopUp from "../../components/shopPage/popUpMenu/BrandsPopUp";
import EnginePopUp from "../../components/shopPage/popUpMenu/EnginePopUp";
import PricePopUp from "../../components/shopPage/popUpMenu/PricePopUp";
import SortPopUp from "../../components/shopPage/popUpMenu/SortPopUp";

const ShopPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const {data: cars, isLoading: isLoadingCar, error: errorCar} = carApi.useFetchAllCarsQuery(searchParams.toString())
    const {data: brands, isLoading: isLoadingBrand, error: errorBrand} = carApi.useFetchAllBrendsQuery('')
    const {data: engines, isLoading: isLoadingEngine, error: errorEngine} = carApi.useFetchAllEnginesQuery('')


    const [showBrand, setShowBrand] = useState(false)
    const [showEngine, setShowEngine] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showSort, setShowSort] = useState(false)

    const changeSearchParamsPage = (value: string) => {
        setSearchParams({...searchParams, page: value})
    }

    const addToCompare = (id: number) => {

    }

    return (
        <div className="commonContainer">
            <div className="shopPage__sort">
                <div onClick={() => {
                    setShowBrand(prev => !prev)
                }} className="shopPage__sort__item">BRANDS
                    {(showBrand && brands) &&
                        <BrandsPopUp brands={brands}/>
                    }
                </div>
                <div onClick={() => {
                    setShowEngine(prev => !prev)
                }} className="shopPage__sort__item">ENGINE
                    {(showEngine && engines) &&
                        <EnginePopUp engines={engines} />
                    }
                </div>
                <div onClick={() => {
                    setShowPrice(prev => !prev)
                }} className="shopPage__sort__item">PRICE
                    {showPrice &&
                        <PricePopUp />
                    }
                </div>
                <div onClick={() => {
                    setShowSort(prev => !prev)
                }} className="shopPage__sort__item">SORT <img style={{marginLeft: 5}} src={arrowDowm} alt=""/>
                    {showSort &&
                        <SortPopUp />
                    }
                </div>
            </div>
            <div className="shopPage__cards">
                {isLoadingCar &&
                    <>
                        <LoadingItemsCard/>
                        <LoadingItemsCard/>
                        <LoadingItemsCard/>
                        <LoadingItemsCard/>
                        <LoadingItemsCard/>
                        <LoadingItemsCard/>
                    </>
                }

                {cars &&
                    cars.rows.map(car =>
                        <ItemCard addToCompare={addToCompare} car={car} key={car.id}/>
                    )
                }

                {cars &&
                    <ItemsPage changeSearchParamsPage={changeSearchParamsPage} searchParams={searchParams}
                               count={cars ? cars.count : 0}/>
                }

            </div>

            {errorCar &&
                <FailedToFetch />
            }

        </div>
    )
};

export default ShopPage;