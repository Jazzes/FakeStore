import React, {FormEvent, useState} from 'react';
import "./signIn.scss"
import axios, {AxiosError} from "axios";
import {loginURL} from "../../http/urls";
import jwtDecode from "jwt-decode";
import {setCookie} from "../../http/cookies";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../store/hooks/redux";
import {userSlice} from "../../store/reducer/UserSlice";
import {User} from "../../models/DataBaseModels";

const SignInPage = () => {

    const {LogIn} = userSlice.actions
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [serverError, setServerError] = useState('')

    const fetchToken = async (email: string, password: string) => {
        try {
            const response = (await axios.post(loginURL, {email, password})).data.token
            const tokenDecoded : User = jwtDecode(response)
            setCookie("token", response, 604800)
            dispatch(LogIn(tokenDecoded))
        } catch (e) {
            const err = e as AxiosError
            const errorMessage = err.response?.data as {message?: string}
            setServerError(errorMessage.message ? errorMessage.message : "")
        }
    }

    const handleSubmit = async (e : FormEvent) => {
        e.preventDefault()
        fetchToken(email, password).then(() => {
        })
    }

    return (
        <div className="commonContainer">
            <div className="signInPage__SignIn">Sign in to FakeStore</div>
            <div className="signInPage__form_shell">
                <div className="signInPage__form">
                    <form onSubmit={handleSubmit} className="signInPage__pos">
                        <div>
                            <div className="signInPage__form__item bold">
                                E-mail address
                                <input value={email} onChange={
                                    (e) => setEmail(e.target.value)}
                                    autoComplete="email" type="email" className="signInPage__form__input"/>
                            </div>
                            <div className="signInPage__form__item bold" style={{marginTop: 30}}>
                                Password
                                <input value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} autoComplete="current-password"
                                       type="password" className="signInPage__form__input"/>
                            </div>
                            {serverError !== "" &&
                                <div className="signInPage__serverError bold">{serverError}</div>
                            }
                        </div>
                        <button type="submit" className="signInPage__form__button">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
            <div className="signInPage__buttonToSign">
                Or <Link className="signInPage__buttonToSign__link" to="/registration">create an account </Link>
            </div>
        </div>
    );
};

export default SignInPage;