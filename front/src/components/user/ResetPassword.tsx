import React, {FC, FormEvent, useState} from 'react';
import cross from "../../static/photos/cross.svg"
import {useAppSelector} from "../../store/hooks/redux";
import axios, {AxiosError} from "axios";
import {resPasURL} from "../../http/urls";

interface IResetPassword {
    closeResetPassword: () => void
}

const ResetPassword: FC<IResetPassword> = ({closeResetPassword}) => {

    const [currPassword, setCurrPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [serverError, setServerError] = useState('')

    const [successRes, setSuccessRes] = useState(false)

    const {email} = useAppSelector(state => state.userReducer)


    const handlePassword = (checkedPassword: string) => {
        if (checkedPassword.length < 8) {
            setPasswordError(true)
            return false
        }
        setPasswordError(false)
        return true
    }

    const fetchNewPassword = async (email: string, password: string, newpassword: string) => {
        try {
            const response = (await axios.post(resPasURL, {email, password, newpassword})).data
            if (response.success === true){
                setSuccessRes(true)
                setTimeout(() => {
                    closeResetPassword()
                }, 1000)
            }
        } catch (e) {
            const err = e as AxiosError
            const errorMessage = err.response?.data as { message?: string }
            setServerError(errorMessage.message ? errorMessage.message : "")
        }
    }


    const handleResetPassword = (e: FormEvent) => {
        e.preventDefault()
        if (handlePassword(newPassword)) {
            fetchNewPassword(email, currPassword, newPassword)
        }
    }

    return (
        <div className="accountPage__resetPassword__background" onClick={() => {
            closeResetPassword()
        }}>
            <div className="accountPage__resetPassword__form" onClick={(e) => e.stopPropagation()}>
                {!successRes ?

                    <form onSubmit={handleResetPassword} className="accountPage__resetPassword__pos">
                        <div>
                            <img className="accountPage__crossBack" src={cross} alt="" onClick={() => {
                                closeResetPassword()
                            }}/>
                            <input autoComplete="email" className="hidden" type="email"/>
                            Current password
                            <input autoComplete="current-password" value={currPassword} onChange={(e) => {
                                setCurrPassword(e.target.value)
                            }} type="password" className="accountPage__resetPassword__input" required={true}/>
                            <div style={{marginTop: 15}}>New password</div>
                            <input autoComplete="new-password" value={newPassword} onChange={(e) => {
                                setNewPassword(e.target.value)
                            }} type="password" className="accountPage__resetPassword__input" required={true}/>
                            {passwordError &&
                                <div style={{color: "#E83B46", marginTop: 5}}>Password must be 8 or more characters</div>
                            }
                            {serverError !== "" &&
                                <div className="accountPage__resetPassword__error bold">{serverError}</div>
                            }
                        </div>
                        <button type="submit" className="accountPage__resetPassword__button">Change</button>
                    </form>
                    :

                    <div className="accountPage__resetPassword__success">
                        Successfully
                    </div>

                }

            </div>
        </div>

    );
};

export default ResetPassword;