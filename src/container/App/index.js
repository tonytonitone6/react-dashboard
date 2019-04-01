import React, { Component } from "react";
import authRoute from "../hoc/authHoc";

@authRoute
class App extends Component {
  render() {
    return <div>app</div>;
  }
}

export default App;

