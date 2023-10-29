import React, {useState} from 'react';
import "./accountPage.scss"
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {clearCookie} from "../../http/cookies";
import {userSlice} from "../../store/reducer/UserSlice";
import {useNavigate} from "react-router-dom";
import ResetPassword from "../../components/user/ResetPassword";

const AccountPage = () => {

    const navigate = useNavigate()
    const {LogOut} = userSlice.actions
    const dispatch = useAppDispatch()

    const [changePassword, setChangePassword] = useState(false)

    const closeResetPassword = () => setChangePassword(false)

    const logOut = () => {
        clearCookie('token')
        dispatch(LogOut())
        navigate('/login')
    }

    const {email} = useAppSelector(state => state.userReducer)

    return (
        <div className="accountPage__container">
            <div className="accountPage__flex">
                <div className="accountPage__info_shell">
                    <div>
                        E-mail:
                        <div className="accountPage__info__email">
                            {email}
                        </div>
                    </div>
                    <div onClick={() => {
                        setChangePassword(true)
                    }} className="accountPage__info__password">
                        Reset password
                    </div>
                </div>

                <div className="accountPage__orders">
                    Orders:
                    <div>Coming soon</div>
                </div>
            </div>
            <div onClick={() => {
                logOut()
            }} className="accountPage__LogOut">
                <div className="accountPage__LogOut__text">
                    Log out
                </div>
            </div>
            {changePassword &&
                <ResetPassword closeResetPassword={closeResetPassword} />
            }
        </div>
    );
};

export default AccountPage;