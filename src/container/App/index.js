import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { component } from "react-decoration";
import authRoute from '../CommonHoc/authHoc';

@authRoute
@component
class App {
  render() {
    return <div>app</div>;
  }
}

export default App;
