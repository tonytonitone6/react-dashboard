import "./node_modules/normalize.css/normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createGlobalStyle } from "styled-components";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { IntlProvider} from 'react-intl';
import Loadable from "react-loadable";
import store from './src/store';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}



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


const LoadableApp = Loadable({
  loader: () => import("./src/container/App"),
  loading() {
    return null;
  }
});

const LoadableLogin = Loadable({
  loader: () => import("./src/container/Login"),
  loading() {
    return null;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router>
        <React.Fragment>
          <GlobalStyle />
          <Switch>
            <LoadableLogin exact path="/login" />
            <LoadableApp path="/" />
          </Switch>
        </React.Fragment>
      </Router>
    </IntlProvider>

  </Provider>,
  document.getElementById("root")
);
