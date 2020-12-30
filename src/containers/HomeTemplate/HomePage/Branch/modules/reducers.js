import * as ActionType from './constants';

let inititalState = {
    loading1: false,
    data1: [],
    err: null,
};

const listBranchReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.BRANCH_DETAIL_REQUEST:
            state.loading1 = true;
            state.data1 = null;
            state.err = null;
            return { ...state };

        case ActionType.BRANCH_DETAIL_SUCCESS:
            state.loading1 = false;
            state.data1 = action.payload;
            state.err = null;
            return { ...state };

        case ActionType.BRANCH_DETAIL_FAILED:
            state.loading1 = false;
            state.data1 = null;
            state.err = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default listBranchReducer;