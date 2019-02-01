import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Field, reduxForm } from "redux-form/immutable";
import { withRouter } from "react-router-dom";
import { Map } from "immutable";

import Modal from "../Common/Modal";
import actions from "../../actions";
import {
  Container,
  LoginCard,
  InputSection,
  InputArea,
  InputField,
  CenterArea,
  LoginLabel,
  ButtonArea,
  CustomButtom,
  SigunupButton,
  SocialArea,
  CustomInputField,
  CustomModalLabel,
  ModalInputArea,
  ModalButtonArea
} from "./styles";

import elements from "../CommonStyle/elements";

class Login extends PureComponent {
  state = {
    showModal: false,
    userInfo: Map({
      email: "",
      password: "",
      name: ""
    })
  };

  onSubmit = () => {};

  onSignup = () => {
    const { userInfo } = this.state;
    const { userSignup } = this.props;

    if (userSignup && typeof userSignup === "function") {
      userSignup(userInfo);
    }
  };

  onSetUserInfo = (type, value) => {
    const { userInfo } = this.state;
    const newData = userInfo.set(type, value);
    this.setState({
      userInfo: newData
    });
  };

  onToggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    });
  };

  onRenderModalField = field => {
    const { type, label, placeholder, input } = field;

    return (
      <ModalInputArea>
        <CustomModalLabel>{label}:</CustomModalLabel>
        <CustomInputField
          {...input}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
        />
      </ModalInputArea>
    );
  };

  onRenderField = field => {
    const { type, label, placeholder, input } = field;

    return (
      <div>
        <CenterArea>
          <InputField
            key={label}
            {...input}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
          />
          <LoginLabel>{label}</LoginLabel>
        </CenterArea>
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    const { showModal } = this.state;

    return (
      <Fragment>
        <Container>
          <LoginCard>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <InputSection>
                <InputArea>
                  <Field
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Please enter your email"
                    component={this.onRenderField}
                  />
                  <Field
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Please enter your password"
                    component={this.onRenderField}
                  />
                </InputArea>
              </InputSection>
              <ButtonArea>
                <CustomButtom>
                  <FormattedMessage id="test" defaultMessage="取消" />
                </CustomButtom>
                <CustomButtom show>
                  <FormattedMessage id="test" defaultMessage="送出" />
                </CustomButtom>
              </ButtonArea>
              <SigunupButton onClick={this.onToggleModal}>
                <span />
                <span />
              </SigunupButton>
              <SocialArea>
                <span>
                  <i className="fab fa-facebook-square" />
                </span>
                <span>
                  <i className="fab fa-google" />
                </span>
              </SocialArea>
            </form>
          </LoginCard>
        </Container>
        {showModal ? (
          <Modal onToggleModal={this.onToggleModal} showModal={showModal}>
            <Field
              label="Name"
              name="name"
              type="text"
              placeholder="Please enter your name"
              component={this.onRenderModalField}
              onChange={e => this.onSetUserInfo("name", e.target.value)}
            />
            <Field
              label="Email"
              name="signupEmail"
              type="text"
              placeholder="Please enter your email"
              component={this.onRenderModalField}
              onChange={e => this.onSetUserInfo("email", e.target.value)}
            />
            <Field
              label="Password"
              name="signupPassword"
              type="password"
              placeholder="Please enter your password"
              component={this.onRenderModalField}
              onChange={e => this.onSetUserInfo("password", e.target.value)}
            />
            <ModalButtonArea>
              <elements.CommonButton
                color="#48dbfb"
                margin="1rem"
                opacity=".3"
                onClick={this.onSignup}
              >
                送出
              </elements.CommonButton>
            </ModalButtonArea>
          </Modal>
        ) : null}
      </Fragment>
    );
  }
}

const validate = () => {
  // const erros = {};
};

const mapStateToProps = ({signup}) => ({
    signup
  })

export default withRouter(
  connect(
    mapStateToProps,
    { ...actions }
  )(
    reduxForm({
      form: "login",
      validate
    })(Login)
  )
);
