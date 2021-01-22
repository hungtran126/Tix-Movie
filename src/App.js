import './App.scss';
import './components/Loading/loading.css';
import './containers/AdminTemplate/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './containers/AdminTemplate/assets/vendor/nucleo/css/nucleo.css';
import 'antd/dist/antd.css';
import { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routesAdmin, routesHome } from './routes';
import PageNotFound from './containers/PageNotFound';
import HomeTemplate from './containers/HomeTemplate';
import Login from './containers/LoginTemplate';
import AdminTemplate from 'containers/AdminTemplate';
import LoginPage from 'containers/AdminTemplate/LoginPage';

const showLayoutHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      )
    });
  }
}
const showLayoutAdmin = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component} Title={item.name} />
      )
    });
  }
}

const checkAuth = (routes) => {
  if(localStorage.getItem("user")) {
    let user = JSON.parse(localStorage.getItem("user"));
    if(user.maLoaiNguoiDung === "QuanTri") {
      return showLayoutAdmin(routes);
    } else {
      return <Route path="/admin/login" component={LoginPage} />;
    }
  } else {
    return <Route path="/admin/login" component={LoginPage} />;
  }
}

class App extends Component {
  
  render(){
    return (
      <Switch>
        {showLayoutHome(routesHome)}
        {checkAuth(routesAdmin)}
        <Route path="/login" component={Login} />
        <Route path="" component={PageNotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
