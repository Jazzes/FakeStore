import React from 'react';
import "./itemCardPage.scss"
import {useParams} from "react-router-dom";
import {carApi, shopApi} from "../../store/services/ApiServices";
import {imgUrl} from "../../http/urls";
import powerCharacteristics from "../../static/photos/powercharacteristics.svg"
import BackButton from "../../components/button/backButton";
import LoadingPage from "../../components/Loading/LoadingPage";
import basket from "../../static/photos/basket.svg"
import compare from "../../static/photos/compare.svg"

const ItemCardPage = () => {

    const {id} = useParams()

    const {data: car, isLoading: isLoadingCar} = carApi.useFetchCarQuery(id!)
    const {data: basketIds} = shopApi.useFetchBasketIdsQuery('')
    const {data: compareIds} = shopApi.useFetchCompareIdsQuery('')
    const basketArray = basketIds?.rows.map(ent => ent.carId)
    const compareArray = compareIds?.compareId.map(ent => ent.carId)

    const [addCompare] = shopApi.useAddToCompareMutation()
    const [addBasket] = shopApi.useAddToBasketMutation()

    const addToCompare = async (id: number) => {
        await addCompare(id)
    }

    const addToBasket = async (id: number) => {
        await addBasket(id)
    }

    return (
        <div className="commonContainer">
            {isLoadingCar &&
                <LoadingPage/>
            }
            {car &&
                <>
                    <BackButton/>

                    <img src={imgUrl + car.img} className="itemCardPage__mainPhoto"/>

                    <div className="itemCardPage__mainContainer">

                        <div className="itemCardPage__name bold">
                            {car.name}
                            <div className="itemCardPage__shellForName">
                                <div className="itemCardPage__shellForName__first"></div>
                                <div className="itemCardPage__shellForName__second"></div>
                                <div className="itemCardPage__shellForName__third"></div>
                                <div className="itemCardPage__shellForName__fourth"></div>
                                <div className="itemCardPage__shellForName__fifth"></div>
                            </div>
                        </div>

                        <div className="itemCardPage__characteristics__cont">
                            <div className="itemCardPage__characteristics__cont__item">
                                <img src={powerCharacteristics} alt="" className=""/>
                                <div className="itemCardPage__characteristics__description">
                                    <div className="itemCardPage__characteristics__description__item">
                                        0-60 mph: <span className="bold">{car.acceleration}</span>
                                    </div>
                                    <div className="itemCardPage__characteristics__description__item">
                                        Horse: <span className="bold">{car.car_info.horsepower} HP</span>
                                    </div>
                                    <div className="itemCardPage__characteristics__description__item">
                                        Engine: <span className="bold">{car.car_info.engine}</span>
                                    </div>
                                    <div className="itemCardPage__characteristics__description__item">
                                        Top speed: <span className="bold">{car.car_info.topspeed} mph</span>
                                    </div>
                                </div>
                            </div>
                            <div className="itemCardPage__characteristics__cont__item itemCardPage__secblock">
                                <div className="itemCardPage__characteristics__column">
                                    <div className="itemCardPage__characteristics__price">
                                        price: <span className="bold">{car.price.toLocaleString()}$</span>
                                    </div>
                                    <div className="itemCardPage__characteristics__buttons">
                                        <div className="itemCardPage__characteristics__button1" onClick={() => {
                                            addToBasket(Number(id))
                                        }}>
                                            {
                                                basketArray?.includes(Number(id)) ?
                                                    <>Remove <img style={{width: 20, marginLeft: 10}} src={basket}
                                                                  alt=""/></>
                                                    :
                                                    <>Add <img style={{width: 20, marginLeft: 10}} src={basket}
                                                               alt=""/></>
                                            }
                                        </div>
                                        <div className="itemCardPage__characteristics__button2" onClick={() => {
                                            addToCompare(Number(id))
                                        }}>
                                            {
                                                compareArray?.includes(Number(id)) ?
                                                    <>Remove <img style={{width: 20, marginLeft: 10}} src={compare}
                                                                  alt=""/></>
                                                    :
                                                    <>Add <img style={{width: 20, marginLeft: 10}} src={compare}
                                                               alt=""/></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="itemCardPage__hint">*To see all characteristic visit official website</div>

                    </div>

                    <div className="itemCardPage__threePhoto">
                        <div className="itemCardPage__threePhoto__shell1">
                            <div className="itemCardPage__threePhoto__shell__first"></div>
                            <div className="itemCardPage__threePhoto__shell__second"></div>
                        </div>
                        <div className="itemCardPagee__posFirst">
                            <img src={imgUrl + car.car_images[0].img} alt=""
                                 className="itemCardPage__threePhoto__first"/>
                        </div>
                        <div className="itemCardPagee__posSecond">
                            <img src={imgUrl + car.car_images[1].img} alt=""
                                 className="itemCardPage__threePhoto__second"/>
                        </div>
                        <div className="itemCardPagee__posThird">
                            <img src={imgUrl + car.car_images[2].img} alt=""
                                 className="itemCardPage__threePhoto__third"/>
                        </div>

                        <div className="itemCardPage__threePhoto__shell2">
                            <div className="itemCardPage__threePhoto__shell__first"></div>
                            <div className="itemCardPage__threePhoto__shell__second"></div>
                        </div>
                    </div>
                </>
            }

        </div>
    );
};

export default ItemCardPage;