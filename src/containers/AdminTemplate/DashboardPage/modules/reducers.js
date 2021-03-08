import * as ActionType from './constants';

let initialState = {
    data: null,
    dateEdit: {},
    err: null,
    loading: false,
    keyword: "",
    userList: [],
};

const manageUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionType.MANAGE_USER_REQUEST:
            state.loading = true;
            return { ...state };

        case ActionType.MANAGE_USER_SUCCESS:
            state.data = action.payload;
            state.loading = false;
            state.err = null;
            return { ...state };

        case ActionType.MANAGE_USER_FAILED:
            state.err = action.payload;
            state.loading = false;
            return { ...state };

        case ActionType.MANAGE_USER_CREATE:
            state.loading = false;
            state.data.push(action.payload);
            state.err = null;
            return { ...state };

        case ActionType.MANAGE_USER_EDIT:
            state.dateEdit = action.payload;
            return { ...state };

        case ActionType.MANAGE_USER_DELETE:
            state.loading = false;
            state.err = null;
            return { ...state };

        case ActionType.MANAGE_USER_SEARCH:
            state.keyword = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default manageUserReducer;

