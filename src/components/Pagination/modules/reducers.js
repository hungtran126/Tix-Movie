import * as ActionType from './constants';

let initialState = {
    info: {},
    paginate: 1
}

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PAGINATION_REQUEST:
            state.info = action.payload;
            return { ...state };

        case ActionType.PAGINATION_REQUEST1:
            state.paginate = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default paginationReducer;