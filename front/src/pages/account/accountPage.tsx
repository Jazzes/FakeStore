import React from 'react';
import "./accountPage.scss"
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {clearCookie} from "../../http/cookies";
import {userSlice} from "../../store/reducer/UserSlice";

const AccountPage = () => {

    const {LogOut} = userSlice.actions
    const dispatch = useAppDispatch()

    const logOut = () => {
        clearCookie('token')
        dispatch(LogOut)
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
                    <div className="accountPage__info__password">
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
        </div>
    );
};

export default AccountPage;