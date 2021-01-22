import api from '../../../../api';
import * as ActionType from './constants';

export const actDetailMovieApi = (tenPhim) => {
    return dispatch => {
        dispatch(actDetailMovieRequest);
        api.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`).then(res => {
            // console.log("detailMovie", res.data);
            dispatch(actDetailMovieSuccess(res.data));
        }).catch(err => {
            dispatch(actDetailMovieFailed(err));
        });
    }
}
const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_REQUEST,
    };
};

const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_SUCCESS,
        payload: data,
    };
};

const actDetailMovieFailed = (err) => {
    return {
        type: ActionType.DETAIL_FAILED,
        payload: err,
    };
};