import React, {FC} from 'react';
import "./PopUp.scss"
import {Engine} from "../../../models/DataBaseModels";

interface IEnginePopUp{
    engines: Engine[]
}

const EnginePopUp : FC<IEnginePopUp> = ( {engines} ) => {
    return (
        <div className="">

        </div>
    );
};

export default EnginePopUp;