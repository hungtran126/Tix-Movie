import api from 'api';
import * as ActionType from './constants';
import { message } from 'antd';

export const actManageUserApi = () => {
    return dispatch => {
        dispatch(actManageUserRequest());
        api.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
            .then((res) => {
                dispatch(actManageUserSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actManageUserFailed(err));
            })
    }
}

export const actCreateUserApi = (data) => {
    return dispatch => {
        dispatch(actManageUserRequest());
        api.post('QuanLyNguoiDung/ThemNguoiDung', data)
            .then((res) => {
                dispatch(actManageUserCreate(res.data));
            })
            .catch((err) => {
                dispatch(actManageUserFailed(err));
            })
    }
}

export const actDeleteUserApi = (taiKhoan) => {
    return dispatch => {
        dispatch(actManageUserRequest());
        api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
            .then((res) => {
                dispatch(actManageUserDelete(taiKhoan));
                message.success(`Đã xóa người dùng`, 4);
            })
            .catch((err) => {
                dispatch(actManageUserFailed(err));
                message.error(err.response.data === '' ? `Không xóa được người dùng` : err.response.data, 3);
            });
    }
}

export const actGetDataUser = (data) => {
    return dispatch => {
        dispatch(actManageUserEdit(data));
    }
}

export const actUserPaginate = (data) => {
    return dispatch => {
        dispatch(actManageUserSuccess(data));
    }
}

export const actUserSearch = (keyword) => {
    return dispatch => {
        dispatch(actSearchUser(keyword));
    }
}

const actManageUserRequest = () => {
    return {
        type: ActionType.MANAGE_USER_REQUEST,
    }
}

const actManageUserSuccess = (data) => {
    return {
        type: ActionType.MANAGE_USER_SUCCESS,
        payload: data,
    }
}

const actManageUserFailed = (err) => {
    return {
        type: ActionType.MANAGE_USER_FAILED,
        payload: err,
    }
}

const actManageUserCreate = (data) => {
    return {
        type: ActionType.MANAGE_USER_CREATE,
        payload: data,
    }
}

const actManageUserEdit = (data) => {
    return {
        type: ActionType.MANAGE_USER_EDIT,
        payload: data
    }
}

const actManageUserDelete = (id) => {
    return {
        type: ActionType.MANAGE_USER_DELETE,
        payload: id,
    }
}

const actSearchUser = (data) => {
    return {
        type: ActionType.MANAGE_USER_SEARCH,
        payload: data,
    }
}