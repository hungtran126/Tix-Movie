import * as ActionType from "./constants";

let inititalState = {
    loading: null,
    data: [],
    err: null
}

const scheduleDetailReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.SCHEDULE_DETAIL_REQUEST:
            state.loading = true;
            state.data = false;
            state.err = false;
            return { ...state };
        case ActionType.SCHEDULE_DETAIL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = false;
            return { ...state };
        case ActionType.SCHEDULE_DETAIL_FAILED:
            state.loading = false;
            state.data = false;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}

export default scheduleDetailReducer;