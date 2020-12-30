import * as ActionType from './constants';

let inititalState = {
    loading: false,
    data: null,
    err: null,
};

const listMovieReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.LIST_MOVIE_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case ActionType.LIST_MOVIE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case ActionType.LIST_MOVIE_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default listMovieReducer;