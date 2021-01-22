import * as Actiontype from './constants';
import api from '../../../../../api';

const actScheduleDetailRequest = () => {
    return {
        type: Actiontype.SCHEDULE_DETAIL_REQUEST,
    };
}

const actScheduleDetailSuccess = (data) => {
    return {
        type: Actiontype.SCHEDULE_DETAIL_SUCCESS,
        payload: data,
    };
}

const actScheduleDetailFailed = (err) => {
    return {
        type: Actiontype.SCHEDULE_DETAIL_FAILED,
        error: err,
    };
}

export const actScheduleDetailApi = (maRap) => {
    return dispatch => {
        dispatch(actScheduleDetailRequest);
        api.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`)
            .then(res => {
                // console.log("res", res.data);
                dispatch(actScheduleDetailSuccess(res.data));
            }).catch(err => {
                dispatch(actScheduleDetailFailed(err));
            });

    }
}
