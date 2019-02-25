import "./node_modules/normalize.css/normalize.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import store from "./src/store";

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

const GlobalStyle = createGlobalStyle`
  * {
    :focus {
      outline: none;
    }
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
  }
`;

const LoadableApp = lazy(() => import("./src/container/App"));
const LoadableLogin = lazy(() => import("./src/container/Login"));

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router>
        <React.Fragment>
          <GlobalStyle />
          <Suspense fallback={<div />}>
            <Switch>
              <Route path="/login" component={LoadableLogin} />
              <Route exact path="/" component={LoadableApp} />
            </Switch>
          </Suspense>
        </React.Fragment>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
