import React, {FormEvent, useState} from 'react';
import "./signIn.scss"

const SignInPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const handlePassword = (checkedPassword: string) => {
        if (checkedPassword.length < 8){
            setPasswordError(true)
            return false
        }
        return true
    }

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault()
        if (handlePassword(password)){

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
                                    <div style={{color: "#E83B46"}}>Password must be 8 or more characters</div>
                                }
                            </div>
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