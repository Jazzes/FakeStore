import React, {FC} from 'react';
import "./PopUp.scss"
import {Brand} from "../../../models/DataBaseModels";

interface IBrandsPopUp{
    brands: Brand[]
}

const BrandsPopUp : FC<IBrandsPopUp> = ({brands}) => {
    return (
        <div className="">

        </div>
    );
};

export default BrandsPopUp;