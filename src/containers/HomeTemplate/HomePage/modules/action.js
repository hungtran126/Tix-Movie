import api from '../../../../api';
import * as Actiontype from './constants';

export const actListMovieApi = () => {
    return dispatch => {
        dispatch(actListMovieRequest);
        api.get("/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=8").then(res => {
            // console.log("res", res.data);
            dispatch(actListMovieSuccess(res.data));
        }).catch(err => {
            dispatch(actListMovieFailed(err));
        });
    }
}
const actListMovieRequest = () => {
    return {
        type: Actiontype.LIST_MOVIE_REQUEST,
    };
};

const actListMovieSuccess = (data) => {
    return {
        type: Actiontype.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};

const actListMovieFailed = (err) => {
    return {
        type: Actiontype.LIST_MOVIE_FAILED,
        payload: err,
    };
};
