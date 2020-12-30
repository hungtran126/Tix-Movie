import './App.scss';
import { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routesHome } from './routes';
import PageNotFound from './containers/PageNotFound';
import HomeTemplate from './containers/HomeTemplate';
import Login from './containers/LoginTemplate';

const showLayoutHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      )
    });
  }
}

class App extends Component {
  render(){
    return (
      <Switch>
        {showLayoutHome(routesHome)}
        <Route path="/login" component={Login} />
        <Route path="" component={PageNotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
