import React from 'react';
import "./compare.scss"
import LoadingPage from "../../components/Loading/LoadingPage";
import FailedToFetch from "../../components/error/FailedToFetch";
import {shopApi} from "../../store/services/ApiServices";
import CompareCard from "../../components/shopPage/carCards/compareCard";

const ComparePage = () => {
    const {data: cars, isLoading, error: isError} = shopApi.useFetchCompareItemsQuery('')
    const [addCompare] = shopApi.useAddToCompareMutation()

    const removeFromCompare = (id: number) => {
        addCompare(id)
    }

    return (
        <div className="comparePage__container">
            <div className="comparePage__name">
                Compare cars
            </div>

            <div className="comparePage__pos">
                {cars &&
                    cars.compareItems.length > 0 ?
                    cars.compareItems.map(ent =>
                        <CompareCard removeFromCompare={removeFromCompare} car={ent.car}
                                     key={ent.carId}/>
                    )
                    :
                    <div className="comparePage__NoCars">You didn't choose any car</div>
                }
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

export default ComparePage;