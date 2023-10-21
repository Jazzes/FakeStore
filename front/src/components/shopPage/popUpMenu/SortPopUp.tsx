import React, {FC} from 'react';
import "./PopUp.scss"

interface ISortPopUp{
    addSearchParam: (name: string, value: string) => void
    deleteSearchParam: (name: string) => void
    searchParams: URLSearchParams
}

const SortPopUp : FC<ISortPopUp> = ({addSearchParam, searchParams, deleteSearchParam}) => {

    const wayOfSorts = [
        {name: 'Price low to high', value: 1}, {name: 'Price high to low', value: 2},
        {name: 'Speed high to low', value: 3}, {name: 'Speed high to low', value: 4}
    ]

    return (
        <div className="popUp__container" onClick={(e) => {
            e.stopPropagation()
        }}>
            {wayOfSorts.map(ent =>
                <div key={ent.value} className="popUp__item" onClick={() => {

                }}>
                    <div className="popUp__item__circle"></div>
                    <div className="popUp__item__name">
                        {ent.name}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SortPopUp;