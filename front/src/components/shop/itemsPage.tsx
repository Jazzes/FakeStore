import React, {useEffect, useState} from 'react';

interface IItemsPage{
    count: number,
    searchParams : URLSearchParams
}

const ItemsPage = ({count, searchParams} : IItemsPage) => {

    const [limit, setLimit] = useState(12)
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

        console.log()
    }, [count]);


    return (
        <div className="shopPage__page__container">
            {pages.map(ent =>
                <div key={ent} onClick={() => {

                }} className={currentPage === ent ?
                    "shopPage__page__item shopPage__page__selected" : "shopPage__page__item"}>
                    {ent}
                </div>
            )}
        </div>
    );
};

export default ItemsPage;