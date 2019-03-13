import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import actions from "../../actions";

const mapStateToProps = state => ({
  status: state.signin
});

export default WrapperComponent =>
  @withRouter
  @connect(
    mapStateToProps,
    { ...actions }
  )
  class authHoc extends PureComponent {
    componentDidMount() {
      const { userStatus } = this.props;
      const token = localStorage.getItem("authToken");
      userStatus(token);
    }

    componentDidUpdate() {
      const { status, history } = this.props;
      const statusResult = status.get("isSuccess");
      statusResult === false ? history.push("login") : undefined;
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
