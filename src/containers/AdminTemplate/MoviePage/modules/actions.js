import api from 'api';
import * as ActionType from './constants';
import { message } from 'antd';

export const actManageMovieApi = () => {
    return dispatch => {
        dispatch(actManageMovieRequest());
        api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01").then(res => {
            dispatch(actManageMovieSuccess(res.data));
        }).catch(err => {
            dispatch(actManageMovieFailed(err));
        });
    }
}

export const actCreateMovieApi = (data) => {
    return dispatch => {
        dispatch(actManageMovieRequest());
        api.post("/QuanLyPhim/ThemPhim", data).then(res => {
            dispatch(actCreateMovie(res.data));
        }).catch(err => {
            dispatch(actManageMovieFailed(err));
        });
    }
}

export const actDeleteMovieApi = (maPhim) => {
    return dispatch => {
        dispatch(actManageMovieRequest());
        api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`).then(res => {
            dispatch(actDeleteMovie(maPhim));
            message.success('Xóa thành công', 3);
        }).catch(err => {
            dispatch(actManageMovieFailed(err));
            message.error(err.response.data === '' ? 'Đã có lỗi xảy ra' : err.response.data, 3);
            console.log('asd');
        });
    }
}

export const actGetDataMovie = (data) => {
    return dispatch => {
        dispatch(actEditMovie(data));
    }
}

export const actMangeMoviePaginate = (data) => {
    return dispatch => {
        dispatch(actManageMovieSuccess(data));
    }
}

const actManageMovieRequest = () => {
    return {
        type: ActionType.MANAGE_MOVIE_REQUEST,
    }
}

const actManageMovieSuccess = (data) => {
    return {
        type: ActionType.MANAGE_MOVIE_SUCCESS,
        payload: data,
    }
}

const actManageMovieFailed = (err) => {
    return {
        type: ActionType.MANAGE_MOVIE_FAILED,
        payload: err,
    }
}

const actCreateMovie = (data) => {
    return {
        type: ActionType.MANAGE_CREATE_MOVIE,
        payload: data
    }
}

const actEditMovie = (data) => {
    return {
        type: ActionType.MANAGE_EDIT_MOVIE,
        payload: data
    }
}

const actDeleteMovie = (id) => {
    return {
        type: ActionType.MANAGE_DELETE_MOVIE,
        payload: id,
    }
}