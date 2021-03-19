import * as ActionTypes from './constants';

let inititalState = {
    loading: false,
    loading1: false,
    data1: null,
    data: null,
    chair: [],
    price: 0,
    err: null,
    err1: null,
};

const checkOutReducer = (state = inititalState, action) => {
    switch (action.type) {

        case ActionTypes.GETINFO_ADDRESS_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case ActionTypes.GETINFO_ADDRESS_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };

        case ActionTypes.GETINFO_ADDRESS_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };

        case ActionTypes.GETINFO_ADDRESS_CHAIR:
            if (action.payload) {
                state.chair.push(action.payload1);
                state.price += action.payload1.giaVe;
            } else {
                for (let index in state.chair) {
                    if (state.chair[index].maGhe === action.payload1.maGhe) {
                        state.chair.splice(parseInt(index), 1);
                    }
                }
                state.price -= action.payload1.giaVe;
            }
            return { ...state };

        case ActionTypes.GETINFO_ADDRESS_PRICE:
            state.price = action.payload;
            return { ...state };

        case ActionTypes.GETBOOKMOVIE_REQUEST:
            state.loading1 = true;
            state.data1 = null;
            state.err1 = null;
            return { ...state };

        case ActionTypes.GETBOOKMOVIE_SUCCESS:
            state.loading1 = false;
            state.data1 = action.payload;
            state.err1 = null;
            return { ...state };

        case ActionTypes.GETBOOKMOVIE_FAILED:
            state.loading1 = false;
            state.data1 = null;
            state.err1 = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default checkOutReducer;