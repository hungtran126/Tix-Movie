import api from '../../../../api';
import * as ActionType from './constants';

export const actDetailMovieApi = (maPhim) => {
    return dispatch => {
        dispatch(actDetailMovieRequest());
        api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`).then(res => {
            console.log("detailMovie", res.data);
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