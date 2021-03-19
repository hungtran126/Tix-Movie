import { combineReducers } from 'redux';
import listMovieReducer from '../../containers/HomeTemplate/HomePage/modules/reducers';
import listVincomReducer from '../../containers/HomeTemplate/HomePage/BookingBar/modules/reducers';
import listBranchReducer from '../../containers/HomeTemplate/HomePage/Branch/modules/reducers';
import detailMovieReducer from '../../containers/HomeTemplate/DetailPage/modules/reducers';
import scheduleDetailReducer from "../../containers/HomeTemplate/DetailPage/Schedule/modules/reducers";
import loginReducer from '../../containers/LoginTemplate/modules/reducers';
import adminTitleReducer from '../../components/NavbarAdmin/modules/reducers';
import loginAdminReducer from '../../containers/AdminTemplate/LoginPage/modules/reducers';
import manageMovieReducer from '../../containers/AdminTemplate/MoviePage/modules/reducers';
import paginationReducer from '../../components/Pagination/modules/reducers';
import manageUserReducer from '../../containers/AdminTemplate/DashboardPage/modules/reducers';
import checkOutReducer from '../../containers/HomeTemplate/BookingPage/modules/reducers';
const rootReducer = combineReducers({
    listMovieReducer,
    listVincomReducer,
    listBranchReducer,
    detailMovieReducer,
    scheduleDetailReducer,
    loginReducer,
    adminTitleReducer,
    loginAdminReducer,
    manageMovieReducer,
    paginationReducer,
    manageUserReducer,
    checkOutReducer,
});

export default rootReducer;
