import * as ActionType from './constants';

let inititalState = {
    loading: false,
    data: [],
    err: null,
};

const listVincomReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.LIST_VINCOM_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case ActionType.LIST_VINCOM_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case ActionType.LIST_VINCOM_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default listVincomReducer;