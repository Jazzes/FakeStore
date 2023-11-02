import React, {FormEvent, useState} from 'react';
import BackButton from "../../components/button/backButton";
import "./order.scss"
import {shopApi} from "../../store/services/ApiServices";

const OrderPage = () => {
    const {data: basketCars} = shopApi.useFetchBasketItemsQuery('')

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')

    const [errorTel, setErrorTel] = useState(false)

    const validateTel = (numTel: string) => {
        const Pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return Pattern.test(numTel)
    }

    const getAllCost = () => {
        const totalCost = (basketCars ? basketCars.rows.map(ent => ent.car.price) : []).reduce((a, b) => {
            return a + b
        }, 0)
        return totalCost.toLocaleString() + "$"
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (validateTel(tel)) {
            setErrorTel(false)
        } else {
            setErrorTel(true)
        }

    }


    return (
        <div className="orderPage__container">
            <BackButton/>
            <form onSubmit={handleSubmit} className="orderPage__form">
                <div className="orderPage__block">
                    <div className="orderPage__form__header bold">Your personal data</div>

                    <div className="orderPage__form__details">Name*</div>
                    <input autoComplete="name" placeholder="John" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}
                           className="orderPage__form__input" type="text" required={true}/>

                    <div className="orderPage__form__details">Your tel*</div>
                    <input autoComplete="tel" placeholder="79275553535" value={tel} onChange={(e) => {
                        setTel(e.target.value)
                    }}
                           className="orderPage__form__input" type="tel" required={true}/>
                    {errorTel &&
                        <div className="orderPage__validateError">Tel in incorrect format.</div>
                    }

                    <div className="orderPage__form__details">E-mail*</div>
                    <input autoComplete="email" placeholder="best@shop.com" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                           className="orderPage__form__input" type="email" required={true}/>

                    <div className="orderPage__form__details">Country*</div>
                    <input autoComplete="country" placeholder="USA" value={country} onChange={(e) => {
                        setCountry(e.target.value)
                    }}
                           className="orderPage__form__input" type="text" required={true}/>
                </div>

                <div className="orderPage__block orderPage__margintop">
                    <div className="orderPage__form__header bold">Details of order</div>

                    <div className="orderPage__form__details">Selected cars</div>

                    {basketCars &&
                        basketCars.rows.map(ent =>
                            <div className="orderPage__form__block__car" key={ent.carId}>
                                <div className="orderPage__form__littleblock">
                                    <div className="orderPage__form__header">{ent.car.name}</div>
                                    <div className="orderPage__form__header bold">{ent.car.price.toLocaleString()}$
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div className="orderPage__form__littleblock orderPage__margintop">
                        <div className="orderPage__form__header bold">Total price:</div>
                        <div className="orderPage__form__header bold">{getAllCost()}</div>
                    </div>
                </div>

                <div className="orderPage__agree">
                    By placing your order you agree to Lisichkin's Terms and Conditions, Privacy Notice and Cookie
                    Policy.
                </div>

                <button className="orderPage__submit bold" type="submit">Make an order</button>
            </form>
        </div>
    );
};

export default OrderPage;