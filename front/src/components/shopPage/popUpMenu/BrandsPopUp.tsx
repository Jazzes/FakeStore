import React, {FC, useEffect, useState} from 'react';
import "./PopUp.scss"
import {Brand} from "../../../models/DataBaseModels";

interface IBrandsPopUp{
    brands: Brand[]
    addSearchParam: (name: string, value: string) => void
    deleteSearchParam: (name: string) => void
    searchParams: URLSearchParams
}

const BrandsPopUp : FC<IBrandsPopUp> = ({brands, addSearchParam, searchParams, deleteSearchParam}) => {

    const brandInit = searchParams.get("brandId") ? (searchParams.get("brandId") + "").split(',').map(ent => Number(ent)) : []

    const [currentBrands, setCurrentBrands] = useState<number[]>(brandInit)

    useEffect(() => {
        if (currentBrands.length > 0) {
            addSearchParam('brandId', currentBrands.join(','))
        } else {
            deleteSearchParam('brandId')
        }
    }, [currentBrands]);

    return (
        <div className="popUp__container" onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="popUp__item__clear" onClick={() => {
                setCurrentBrands([])
            }}>clear</div>
            {brands.map(ent =>
                <div key={ent.id} className="popUp__item" onClick={() => {
                    if (currentBrands.includes(ent.id)){
                        setCurrentBrands(currentBrands.filter(num => num !== ent.id))
                    } else {
                        setCurrentBrands([...currentBrands, ent.id])
                    }
                }}>
                    <div className={currentBrands.includes(ent.id) ?
                        "popUp__item__selected popUp__item__square" : "popUp__item__square"}></div>
                    <div className="popUp__item__name">
                        {ent.name}
                    </div>
                    
                </div>
            )}
        </div>
    );
};

export default BrandsPopUp;