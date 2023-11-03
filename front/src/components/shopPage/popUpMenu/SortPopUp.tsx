import React, {FC, useEffect, useState} from 'react';
import "./PopUp.scss"

interface ISortPopUp{
    addSearchParam: (name: string, value: string) => void
    deleteSearchParam: (name: string) => void
    searchParams: URLSearchParams
}

const SortPopUp : FC<ISortPopUp> = ({addSearchParam, searchParams, deleteSearchParam}) => {

    const sortInit = searchParams.get("sort") ? searchParams.get("sort") + "" : ""

    const [sortId, setSortId] = useState(sortInit)

    const wayOfSorts = [
        {name: 'Price low to high', id: 1}, {name: 'Price high to low', id: 2},
        {name: 'Speed low to high', id: 3}, {name: 'Speed high to low', id: 4}
    ]

    useEffect(() => {
        if (sortId && sortId !== "") {
            addSearchParam('sort', sortId)
        } else {
            deleteSearchParam('sort')
        }
    }, [sortId]);

    return (
        <div className="popUp__container popUp__pos" onClick={(e) => {
            e.stopPropagation()
        }}>
            {wayOfSorts.map(ent =>
                <div key={ent.id} className="popUp__item" onClick={() => {
                    const idCur = String(ent.id)
                    if (idCur === sortId) {
                       setSortId("")
                    } else {
                        setSortId(String(ent.id))
                    }
                }}>
                    <div className={sortId === String(ent.id) ?
                        "popUp__item__circle popUp__item__selected" : "popUp__item__circle"}></div>
                    <div className="popUp__item__name">
                        {ent.name}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SortPopUp;