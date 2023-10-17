import React, {useEffect, useState} from 'react';

interface IItemsPage{
    count: number,
    searchParams : URLSearchParams
    changeSearchParamsPage: (value: string) => void
}

const ItemsPage = ({count, searchParams, changeSearchParamsPage} : IItemsPage) => {

    const limit = 12
    const [pages, setPages] = useState<number[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        if (searchParams.get('page') && Number(searchParams.get('page')) > 0){
            setCurrentPage(Number(searchParams.get('page')))
        }
    }, [searchParams]);

    useEffect(() => {
        const numOfPages = Math.ceil(count / limit)
        const tempArr = []
        for (let i = 0; i !== numOfPages; ++i){
            tempArr.push(i + 1)
        }
        setPages(tempArr)
    }, [count]);


    return (
        <div className="shopPage__page__container">
            {pages.map(ent =>
                <div key={ent} onClick={() => {
                    changeSearchParamsPage(String(ent))
                }} className={currentPage === ent ?
                    "shopPage__page__item shopPage__page__selected" : "shopPage__page__item"}>
                    {ent}
                </div>
            )}
        </div>
    );
};

export default ItemsPage;