import { combineReducers } from 'redux';
import listMovieReducer from '../../containers/HomeTemplate/HomePage/modules/reducers';
import listVincomReducer from '../../containers/HomeTemplate/HomePage/BookingBar/modules/reducers';
import listBranchReducer from '../../containers/HomeTemplate/HomePage/Branch/modules/reducers';
import detailMovieReducer from '../../containers/HomeTemplate/DetailPage/modules/reducers';
const rootReducer = combineReducers({
    listMovieReducer,
    listVincomReducer,
    listBranchReducer,
    detailMovieReducer,
});

export default rootReducer;