import { message } from 'antd';
import api from 'api';
import * as ActionTypes from './constants';

const actBookMovieRequest = () => {
    return {
        type: ActionTypes.GETBOOKMOVIE_REQUEST,
    }
}

const actBookMovieSuccess = (data) => {
    return {
        type: ActionTypes.GETBOOKMOVIE_SUCCESS,
        payload: data,
    }
}

const actBookMovieFailed = (err) => {
    return {
        type: ActionTypes.GETBOOKMOVIE_FAILED,
        payload: err,
    }
}

const actInfoRequest = () => {
    return {
        type: ActionTypes.GETINFO_ADDRESS_REQUEST,
    }
}

const actInfoAddressSuccess = (data) => {
    return {
        type: ActionTypes.GETINFO_ADDRESS_SUCCESS,
        payload: data
    }
}

const actInfoAddressFailed = (data) => {
    return {
        type: ActionTypes.GETINFO_ADDRESS_FAILED,
        payload: data
    }
}

const actInfoAddressChair = (boolean, data) => {
    return {
        type: ActionTypes.GETINFO_ADDRESS_CHAIR,
        payload: boolean,
        payload1: data,
    }
}

// const actInfoAddressPrice = (data) => {
//     return {
//         type: ActionTypes.GETINFO_ADDRESS_PRICE,
//         payload: data
//     }
// }

export const actBookMovieApi = (data) => {
    return dispatch => {
        dispatch(actBookMovieRequest());
        api.post("QuanLyDatVe/DatVe", data).then((res) => {
            message.success(res.data);
            window.location.reload();
            dispatch(actBookMovieSuccess(res));
        }).catch((err) => {
            message.error(err);
            window.location.reload();
            dispatch(actBookMovieFailed(err));
        });
    }
}

export const actGetPriceAndChair = (boolean, data) => {
    return dispatch => {
        dispatch(actInfoAddressChair(boolean, data));
    }
}

export const actGetInfoAddress = (maLichChieu) => {
    return dispatch => {
        dispatch(actInfoRequest());
        api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`).then((res) => {
            dispatch(actInfoAddressSuccess(res.data));
        }).catch((err) => {
            dispatch(actInfoAddressFailed(err));
        });
    }
}