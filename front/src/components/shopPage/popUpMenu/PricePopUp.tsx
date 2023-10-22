import React, {FC, useEffect, useRef, useState} from 'react';
import "./PopUp.scss"
import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

interface IPricePopUp{
    addSearchParam: (name: string, value: string) => void
    deleteSearchParam: (name: string) => void
    searchParams: URLSearchParams
}

const PricePopUp : FC<IPricePopUp> = ({addSearchParam, searchParams, deleteSearchParam}) => {

    const minPriceInit = searchParams.get("pricemin") ? searchParams.get("pricemax") + "" : ""

    const maxPriceInit = searchParams.get("pricemax") ? searchParams.get("pricemax") + "" : ""

    let minPriceTimeout = useRef<TimeoutId>()
    let maxPriceTimeout = useRef<TimeoutId>()

    const [minPrice, setMinPrice] = useState(minPriceInit)

    const [maxPrice, setMaxPrice] = useState(maxPriceInit)

    useEffect(() => {
        clearTimeout(minPriceTimeout.current)
        minPriceTimeout.current = setTimeout(() => {
            if (minPrice && minPrice !== "") {
                addSearchParam('pricemin', minPrice)
            } else {
                deleteSearchParam('pricemin')
            }
        }, 1000)
    }, [minPrice]);

    useEffect(() => {
        clearTimeout(maxPriceTimeout.current)
        maxPriceTimeout.current = setTimeout(() => {
            if (maxPrice && maxPrice !== "") {
                addSearchParam('pricemax', maxPrice)
            } else {
                deleteSearchParam('pricemax')
            }
        }, 1000)
    }, [maxPrice]);

    return (
        <div className="popUp__container" onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="popUp__price__cont" style={{marginTop: 15}}>
                <div style={{fontSize: "1rem"}}>min</div>
                <div style={{fontSize: "1rem"}}>max</div>
            </div>
            <div className="popUp__price__cont" style={{marginTop: 5}}>
                <input className="popUp__price__input" onChange={(e) => {
                    setMinPrice(e.target.value)
                }} style={{marginRight: 20}} type="number" value={minPrice}/>
                <input className="popUp__price__input" onChange={(e) => {
                    setMaxPrice(e.target.value)
                }} value={maxPrice} type="number"/>
            </div>
        </div>
    );
};

export default PricePopUp;