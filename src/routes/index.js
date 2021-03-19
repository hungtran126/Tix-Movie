import HomePage from "../containers/HomeTemplate/HomePage";
import DetailPage from '../containers/HomeTemplate/DetailPage';
import DashboardPage from "containers/AdminTemplate/DashboardPage";
import ManagePage from "containers/AdminTemplate/ManagePage";
import MoviePage from "containers/AdminTemplate/MoviePage";
import HistoryPage from "containers/AdminTemplate/HistoryPage";
import TopBookPage from "containers/AdminTemplate/TopBookPage";

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
    },
]

const routesAdmin = [
    {
        exact: true,
        path: "/admin",
        name: "Người dùng",
        component: DashboardPage
    },
    {
        exact: true,
        path: "/admin/dashboard",
        name: "Người dùng",
        component: DashboardPage
    },
    {
        exact: true,
        path: "/admin/movie",
        name: "Phim",
        component: MoviePage
    },
    {
        exact: true,
        path: "/admin/manage",
        name: "Doanh thu",
        component: ManagePage
    },
    {
        exact: true,
        path: "/admin/bookhistory",
        name: "Lịch sử đặt vé",
        component: HistoryPage
    },
    {
        exact: true,
        path: "/admin/topbook",
        name: "Top phim được đặt vé nhiều nhất",
        component: TopBookPage
    },
];
export { routesHome, routesAdmin };