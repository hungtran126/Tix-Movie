import * as ActionType from './constants';

let inititalState = {
    loading: false,
    data: [],
    err: null,
};

const loginReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.LOGIN_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case ActionType.LOGIN_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case ActionType.LOGIN_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };

        case ActionType.CLEAR_DATA:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };

        default:
            return { ...state };
    }
}

export default loginReducer;