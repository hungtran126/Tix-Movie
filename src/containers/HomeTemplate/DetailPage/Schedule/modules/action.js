import * as Actiontype from './constants';
import api from '../../../../../api';

const actScheduleDetailRequest = () => {
    return {
        type: Actiontype.SCHEDULE_DETAIL_REQUEST,
    };
}

const actScheduleDetailSuccess = (data, maRap) => {
    return {
        type: Actiontype.SCHEDULE_DETAIL_SUCCESS,
        payload: data,
        payload1: maRap
    };
}

const actScheduleDetailFailed = (err) => {
    return {
        type: Actiontype.SCHEDULE_DETAIL_FAILED,
        error: err,
    };
}

export const actScheduleDetailApi = (data) => {
    return dispatch => {
        dispatch(actScheduleDetailSuccess(data));
    }
}
