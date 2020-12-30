
import api from '../../../../../api';
import * as Actiontype from './constants';

export const actBranchDetailApi = (maRap) => {
    return dispatch => {
        dispatch(actBranchDetailRequest);
        api.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`).then(res => {
            // console.log("res", res.data);
            dispatch(actBranchDetailSuccess(res.data));
        }).catch(err => {
            dispatch(actBranchDetailFailed(err));
        });
    }
}

const actBranchDetailRequest = () => {
    return {
        type: Actiontype.BRANCH_DETAIL_REQUEST,
    };
};

const actBranchDetailSuccess = (data) => {
    return {
        type: Actiontype.BRANCH_DETAIL_SUCCESS,
        payload: data,
    };
};

const actBranchDetailFailed = (err) => {
    return {
        type: Actiontype.BRANCH_DETAIL_FAILED,
        payload: err,
    };
};
