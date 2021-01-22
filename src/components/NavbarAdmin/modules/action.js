import * as ActionType from './constants';

export const actGetTitleAdmin = (title) => {
    return dispatch => {
        dispatch(actGetTitleAdminRequest(title));
    }
}

const actGetTitleAdminRequest = (title) => {
    return {
        type: ActionType.ADMIN_TITLE_REQUEST,
        payload: title
    };
};