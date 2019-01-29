import React from "react";
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
