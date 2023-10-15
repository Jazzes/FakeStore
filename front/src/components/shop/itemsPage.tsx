import React, {useState} from 'react';

interface IItemsPage{
    count: number,
}

const ItemsPage = ({count} : IItemsPage) => {

    const [limit, setLimit] = useState(12)
    const [page, setPage] = useState(1)


    return (
        <div className="shopPage__page__container">
            <div className="shopPage__pages__page">
                {Math.ceil(count / limit)}
            </div>
        </div>
    );
};

export default ItemsPage;