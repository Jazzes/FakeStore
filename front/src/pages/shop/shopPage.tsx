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
    const {data: brands} = carApi.useFetchAllBrendsQuery('')
    const {data: engines} = carApi.useFetchAllEnginesQuery('')


    const [showBrand, setShowBrand] = useState(false)
    const [showEngine, setShowEngine] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showSort, setShowSort] = useState(false)

    const addSearchParams = (name: string, value: string) => {
        searchParams.set(name, value)
        setSearchParams(searchParams)
    }

    const deleteSearchParam = (name: string) => {
        searchParams.delete(name)
        setSearchParams(searchParams)
    }

    const addToCompare = (id: number) => {

    }

    const closePopUps = (name: string) => {
        if (name !== "BRANDS"){
            setShowBrand(false)
        }
        if (name !== "ENGINES"){
            setShowEngine(false)
        }
        if (name !== "PRICE"){
            setShowPrice(false)
        }
        if (name !== "SORT"){
            setShowSort(false)
        }
    }

    return (
        <div className="commonContainer">
            <div className="shopPage__sort">
                <div onClick={() => {
                    setShowBrand(prev => !prev)
                    closePopUps("BRANDS")
                }} className="shopPage__sort__item">
                    <div className="shopPage__sort__item__name noSelect">BRANDS</div>
                    {(showBrand && brands) &&
                        <BrandsPopUp searchParams={searchParams} deleteSearchParam={deleteSearchParam}
                                     addSearchParam={addSearchParams} brands={brands}/>
                    }
                </div>
                <div onClick={() => {
                    setShowEngine(prev => !prev)
                    closePopUps("ENGINES")
                }} className="shopPage__sort__item">
                    <div className="shopPage__sort__item__name noSelect">ENGINES</div>
                    {(showEngine && engines) &&
                        <EnginePopUp searchParams={searchParams} deleteSearchParam={deleteSearchParam}
                                     addSearchParam={addSearchParams} engines={engines} />
                    }
                </div>
                <div onClick={() => {
                    setShowPrice(prev => !prev)
                    closePopUps("PRICE")
                }} className="shopPage__sort__item">
                    <div className="shopPage__sort__item__name noSelect">PRICE</div>
                    {showPrice &&
                        <PricePopUp searchParams={searchParams} deleteSearchParam={deleteSearchParam}
                                    addSearchParam={addSearchParams}/>
                    }
                </div>
                <div onClick={() => {
                    setShowSort(prev => !prev)
                    closePopUps("SORT")
                }} className="shopPage__sort__item">
                    <div className="shopPage__sort__item__name noSelect">SORT <img style={{marginLeft: 5}} src={arrowDowm} alt=""/> </div>
                    {showSort &&
                        <SortPopUp searchParams={searchParams} deleteSearchParam={deleteSearchParam}
                                   addSearchParam={addSearchParams} />
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

                {cars && cars.count === 0 ?
                    <div className="shopPage__noCars">There are no cars</div>
                    :
                    <></>
                }

                {cars &&
                    <ItemsPage addSearchParams={addSearchParams} searchParams={searchParams}
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