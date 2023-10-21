import React, {FC, useEffect, useState} from 'react';
import "./PopUp.scss"
import {Engine} from "../../../models/DataBaseModels";

interface IEnginePopUp{
    engines: Engine[]
    addSearchParam: (name: string, value: string) => void
    deleteSearchParam: (name: string) => void
    searchParams: URLSearchParams
}

const EnginePopUp : FC<IEnginePopUp> = ( {engines, addSearchParam, searchParams, deleteSearchParam} ) => {

    const engineInit = searchParams.get("engineId") ? (searchParams.get("engineId") + "").split(',').map(ent => Number(ent)) : []

    const [currentEngines, setCurrentEngines] = useState<number[]>(engineInit)

    useEffect(() => {
        if (currentEngines.length > 0) {
            addSearchParam('engineId', currentEngines.join(','))
        } else {
            deleteSearchParam('engineId')
        }
    }, [currentEngines]);

    return (
        <div className="popUp__container" style={{paddingRight: 70}} onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="popUp__item__clear" onClick={() => {
                setCurrentEngines([])
            }}>clear</div>

            {engines.map(ent =>
                <div key={ent.id} className="popUp__item" onClick={() => {
                    if (currentEngines.includes(ent.id)){
                        setCurrentEngines(currentEngines.filter(num => num !== ent.id))
                    } else {
                        setCurrentEngines([...currentEngines, ent.id])
                    }
                }}>
                    <div className={currentEngines.includes(ent.id) ?
                        "popUp__item__selected popUp__item__square" : "popUp__item__square"}></div>
                    <div className="popUp__item__name">
                        {ent.name}
                    </div>

                </div>
            )}
        </div>
    );
};

export default EnginePopUp;