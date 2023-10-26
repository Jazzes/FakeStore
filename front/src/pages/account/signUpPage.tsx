import React, {FormEvent, useState} from 'react';
import "./signIn.scss"
import axios, {AxiosError} from "axios";
import {loginURL, registrationURL} from "../../http/urls";
import jwtDecode from "jwt-decode";
import {setCookie} from "../../http/cookies";
import {Link} from "react-router-dom";
import {User} from "../../models/DataBaseModels";
import {userSlice} from "../../store/reducer/UserSlice";
import {useAppDispatch} from "../../store/hooks/redux";

const SignUpPage = () => {

    const {LogIn} = userSlice.actions
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [serverError, setServerError] = useState('')

    const handlePassword = (checkedPassword: string) => {
        if (checkedPassword.length < 8){
            setPasswordError(true)
            return false
        }
        setPasswordError(false)
        return true
    }

    const fetchToken = async (email: string, password: string) => {
        try {
            const response = (await axios.post(registrationURL, {email, password})).data.token
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
        if (handlePassword(password)){
            fetchToken(email, password).then(() => {

            })
        }
    }

    return (
        <div className="commonContainer">
            <div className="signInPage__SignIn">Sign up to FakeStore</div>
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
                                }} autoComplete="new-password"
                                       type="password" className="signInPage__form__input"/>
                                {passwordError &&
                                    <div style={{color: "#E83B46", marginTop: 5}}>Password must be 8 or more characters</div>
                                }
                            </div>
                            {serverError !== "" &&
                                <div className="signInPage__serverError bold">{serverError}</div>
                            }
                        </div>
                        <button type="submit" className="signInPage__form__button">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
            <div className="signInPage__buttonToSign">
                Already have an account? <Link className="signInPage__buttonToSign__link" to="/login">Sign in</Link>
            </div>
        </div>
    );
};

export default SignUpPage;