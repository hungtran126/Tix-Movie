import * as ActionType from './constants';

let initialState = {
    title: null
}

const adminTitleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADMIN_TITLE_REQUEST:
            state.title = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}

export default adminTitleReducer;