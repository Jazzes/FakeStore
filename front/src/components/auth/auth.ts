import axios from "axios";
import {authURL} from "../../http/urls";
import {getCookie, setCookie} from "../../http/cookies";
import {useAppDispatch} from "../../store/hooks/redux";
import {userSlice} from "../../store/reducer/UserSlice";
import {User} from "../../models/DataBaseModels";
import jwtDecode from "jwt-decode";

export const UpdateAuth = async () => {
    const tokenCookie = getCookie("token")
    const dispatch = useAppDispatch()
    const {LogIn} = userSlice.actions

    if (tokenCookie) {
        const tokenDecoded: User = jwtDecode(tokenCookie)
        dispatch(LogIn(tokenDecoded))
        try {
            const response = (await axios.get(authURL, {
                    headers: {
                        Authorization: `Bearer ${tokenCookie}`
                    }
                }
            )).data.token
            setCookie("token", response, 604800)
        } catch (e) {
        }
    }
}