import React from 'react';
import basket from "../../static/photos/basket.svg";
import {Link} from "react-router-dom";
import {shopApi} from "../../store/services/ApiServices";

const BasketButton = () => {

    const {data: basketItems} = shopApi.useFetchBasketIdsQuery('')

    return (
        <Link className="basketLogo" to="/basket">
            <img className="basketLogoSize" alt="" src={basket}/>
            {basketItems?.count ?
                <div className="basketItemsSize">{basketItems.count}</div>
                :
                <></>
            }
        </Link>
    );
};

export default BasketButton;