import React, {FormEvent, useState} from 'react';
import "./signIn.scss"
import axios, {AxiosError} from "axios";
import {loginURL} from "../../http/urls";

const SignInPage = () => {

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
            const token = await axios.post(loginURL, {email, password})
            console.log(token.data)
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
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;