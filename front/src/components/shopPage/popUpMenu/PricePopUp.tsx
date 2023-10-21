import React, {FC, useEffect, useState} from 'react';
import "./PopUp.scss"

interface IPricePopUp{
    addSearchParam: (name: string, value: string) => void
    deleteSearchParam: (name: string) => void
    searchParams: URLSearchParams
}

const PricePopUp : FC<IPricePopUp> = ({addSearchParam, searchParams, deleteSearchParam}) => {

    const minPriceInit = searchParams.get("pricemin") + ""

    const maxPriceInit = searchParams.get("pricemax") + ""

    const [minPrice, setMinPrice] = useState(minPriceInit)

    const [maxPrice, setMaxPrice] = useState(maxPriceInit)

    useEffect(() => {
        console.log(minPrice, maxPrice)
    }, []);

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
                }} style={{marginRight: 20}} value={minPrice}/>
                <input className="popUp__price__input" onChange={(e) => {
                    setMaxPrice(e.target.value)
                }} value={maxPrice}/>
            </div>
        </div>
    );
};

export default PricePopUp;