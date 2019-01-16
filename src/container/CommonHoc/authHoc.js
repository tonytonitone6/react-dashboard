import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


export default WrapperComponent => class authRoute extends Component {
    
  
  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    return <WrapperComponent {...this.props} />
  }
}