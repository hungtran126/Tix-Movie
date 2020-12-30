import api from "../../../../../api";
import * as Actiontype from './constants';

export const actListVincomApi = () => {
    return dispatch => {
        dispatch(actListVincomRequest);
        api.get("/QuanLyRap/LayThongTinHeThongRap").then(res => {
            // console.log("res", res.data);
            dispatch(actListVincomSuccess(res.data));
        }).catch(err => {
            dispatch(actListVincomFailed(err));
        });
    }
}

const actListVincomRequest = () => {
    return {
        type: Actiontype.LIST_VINCOM_REQUEST,
    };
};

const actListVincomSuccess = (data) => {
    return {
        type: Actiontype.LIST_VINCOM_SUCCESS,
        payload: data,
    };
};

const actListVincomFailed = (err) => {
    return {
        type: Actiontype.LIST_VINCOM_FAILED,
        payload: err,
    };
};