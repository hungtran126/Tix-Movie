import * as ActionType from './constants';

let inititalState = {
    loading: false,
    data: null,
    data1: null,
    err: null,
};

const detailMovieReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.DETAIL_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case ActionType.DETAIL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case ActionType.DETAIL_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default detailMovieReducer;