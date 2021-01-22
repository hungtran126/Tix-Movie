import * as ActionType from "./constants";

let inititalState = {
    loading1: null,
    data1: [],
    err: null
}

const scheduleDetailReducer = (state = inititalState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case ActionType.SCHEDULE_DETAIL_REQUEST:
            state.loading1 = true;
            state.data1 = null;
            state.err = null;
            return { ...state };
        case ActionType.SCHEDULE_DETAIL_SUCCESS:
            state.loading1 = false;
            state.data1 = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.SCHEDULE_DETAIL_FAILED:
            state.loading1 = false;
            state.data1 = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}

export default scheduleDetailReducer;