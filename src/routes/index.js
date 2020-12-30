import HomePage from "../containers/HomeTemplate/HomePage";
import DetailPage from '../containers/HomeTemplate/DetailPage';

const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: `/phim/:maPhim`,
        component: DetailPage,
    }
]

export { routesHome };