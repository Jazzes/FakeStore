import React from 'react';
import "./itemCard.scss"

const LoadingItemsCard = () => {
    return (
        <div className="itemCardLoading__container">
            <div className="itemCardLoading__image"/>
            <div className="itemCardLoading__name"/>
            <div className="itemCardLoading__info"/>
            <div className="itemCardLoading__link"/>
        </div>
    );
};

export default LoadingItemsCard;