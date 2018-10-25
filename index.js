import "./node_modules/normalize.css/normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Loadable from "react-loadable";

const LoadableApp = Loadable({
  loader: () => import("./src/components/App"),
  loading() {
    return null;
  }
});

const LoadableLogin = Loadable({
  loader: () => import("./src/components/Login"),
  loading() {
    return null;
  }
});

ReactDOM.render(
  <Router>
    <Switch>
      <LoadableLogin exact path="/login" />
      <LoadableApp path="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
