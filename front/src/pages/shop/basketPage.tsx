import React from 'react';
import {shopApi} from "../../store/services/ApiServices";
import "./basketPage.scss"
import BasketCarCard from "../../components/shopPage/carCards/basketCarCard";
import FailedToFetch from "../../components/error/FailedToFetch";
import LoadingPage from "../../components/Loading/LoadingPage";
import {Link} from "react-router-dom";

const BasketPage = () => {

    const {data: cars, isLoading, error: isError} = shopApi.useFetchBasketItemsQuery('')
    const {data: compareIds} = shopApi.useFetchCompareIdsQuery('')
    const compareArray = compareIds?.compareId.map(ent => ent.carId)
    const [addCompare] = shopApi.useAddToCompareMutation()
    const [addBasket] = shopApi.useAddToBasketMutation()

    const addToCompare = async (id : number) => {
        await addCompare(id)
    }

    const removeFromBasket = async (id : number) => {
        await addBasket(id)
    }

    const getAllCost = () => {
        const totalCost = (cars ? cars.rows.map(ent => ent.car.price) : []).reduce((a, b) => {
            return a + b
        }, 0)
        return totalCost.toLocaleString() + "$"
    }

    return (
        <div className="basketPage__container">
            <div className="basketPage__name">
                Selected cars
            </div>

            <div className="basketPage__pos">
                <div className="">
                    {cars &&
                        cars.rows.map(ent =>
                            <BasketCarCard removeFromBasket={removeFromBasket} addToCompare={addToCompare}
                                           compareArray={compareArray} car={ent} key={ent.carId}/>
                        )
                    }
                </div>

                <div className="basketPage__formBuy">
                    <div>
                        <div className="bold">Details</div>
                        <div style={{marginTop: 20}}>Cars: {cars ? cars.count : 0}</div>
                        <div>Total price: <span className="bold">{getAllCost()}</span></div>
                    </div>
                    <Link to='/order' className="basketPage__toOrder">Checkout</Link>
                </div>
                
            </div>
            

            {isLoading &&
                <LoadingPage/>
            }

            {isError &&
                <FailedToFetch/>
            }

        </div>
    );
};

export default BasketPage;