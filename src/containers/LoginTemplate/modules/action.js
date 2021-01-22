import api from '../../../api';
import setHeaders from '../../../ultils/setHeaders';
import * as ActionType from './constants';

export const actLoginApi = (form, history) => {
    return dispatch => {
        dispatch(actLoginRequest());
        api.post(`/QuanLyNguoiDung/DangNhap`, form).then(res => {
            console.log("Login", res.data);
            dispatch(actLoginSuccess(res.data));
            //setHeader Token
            setHeaders(res.data.accessToken);
            //Lưu trạng trái login
            localStorage.setItem("user", JSON.stringify(res.data));
            //Redirect
            history.push("/");
            //Thời gian hết phiên
            const date = new Date().getTime();
            const exp = date + 3600000;
            localStorage.setItem("exp", exp);
            const expTimeout = exp - date;
            dispatch(setTimeoutLogout(history, expTimeout))
        }).catch(err => {
            dispatch(actLoginFailed(err));
        });
    }
}
const actLoginRequest = () => {
    return {
        type: ActionType.LOGIN_REQUEST,
    };
};

const actLoginSuccess = (data) => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
    };
};

const actLoginFailed = (err) => {
    return {
        type: ActionType.LOGIN_FAILED,
        payload: err,
    };
};

export const actLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("exp");
    window.location.reload();
    return {
        type: ActionType.CLEAR_DATA,
    }
}

const setTimeoutLogout = (history, expTimeout) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(actLogout(history));
        }, expTimeout);
    }
}