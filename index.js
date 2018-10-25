import "./node_modules/normalize.css/normalize.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './src/components/Login';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';

const LoadableApp = Loadable({
  loader: () => import('./src/components/App'),
  loading() {
    return <p>load app</p>;
  }
});



ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <LoadableApp path="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
)