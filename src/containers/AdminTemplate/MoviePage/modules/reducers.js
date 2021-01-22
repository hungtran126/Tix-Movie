import * as ActionType from './constants';
let initialState = {
    data: null,
    dataEdit: {},
    loading: false,
    err: null
};

const manageMovieReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionType.MANAGE_MOVIE_REQUEST:
            state.loading = true;
        return { ...state };

        case ActionType.MANAGE_MOVIE_SUCCESS:
            state.data = action.payload;
            state.loading = false;
            state.err = null;
        return { ...state };

        case ActionType.MANAGE_MOVIE_FAILED:
            state.loading = false;
            state.err = action.payload;
        return { ...state };

        case ActionType.MANAGE_CREATE_MOVIE:
            state.loading = false;
            state.data.push(action.payload);
            state.err = null;
        return { ...state };

        case ActionType.MANAGE_EDIT_MOVIE:
            state.dataEdit = action.payload;
        return { ...state };

        case ActionType.MANAGE_DELETE_MOVIE:
            state.loading = false;
            state.err = null;
        return { ...state };
    
        default:
        return { ...state };
    }
}

export default manageMovieReducer;