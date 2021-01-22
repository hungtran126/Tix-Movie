import api from '../../../../api/index';
import setHeaders from 'ultils/setHeaders';
import * as ActionType from './constants';

export const actLoginAdminApi = (form, history) => {
    return dispatch => {
        dispatch(actLoginAdminRequest);
        api.post(`/QuanLyNguoiDung/DangNhap`, form).then(res => {
            // console.log("Login", res.data);
            dispatch(actLoginAdminSuccess(res.data));
            if (res.data.maLoaiNguoiDung === "QuanTri") {
                //setHeader Token
                setHeaders(res.data.accessToken);
                //Lưu trạng trái login
                localStorage.setItem("user", JSON.stringify(res.data));
                //Redirect
                history.push("/admin");
                //Thời gian hết phiên
                const date = new Date().getTime();
                const exp = date + 3600000;
                localStorage.setItem("exp", exp);
                const expTimeout = exp - date;
                dispatch(setTimeoutLogout(history, expTimeout));
            } else {
                return Promise.reject({
                    response: { data: "Bạn không có quyền truy cập" },
                });
            }
        }).catch(err => {
            dispatch(actLoginAdminFailed(err));
        });
    }
}
const actLoginAdminRequest = () => {
    return {
        type: ActionType.LOGIN_ADMIN_REQUEST,
    };
};

const actLoginAdminSuccess = (data) => {
    return {
        type: ActionType.LOGIN_ADMIN_SUCCESS,
        payload: data,
    };
};

const actLoginAdminFailed = (err) => {
    return {
        type: ActionType.LOGIN_ADMIN_FAILED,
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