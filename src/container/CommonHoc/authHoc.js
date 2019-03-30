/* eslint-disable no-else-return */
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
      userStatus();
    }

    componentDidUpdate() {
      const { status, history } = this.props;
      const statusResult = status.get("isSuccess");
      if (statusResult !== true) {
        history.push('login');
      }
    }

    render() {
      const { status } = this.props;
      if (status.get("isSuccess")) {
        return <WrapperComponent {...this.props} />;
      } else {
        return <div></div>
      }
    }
  };
