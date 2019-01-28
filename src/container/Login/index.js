import React, { Fragment } from "react";
import { component } from "react-decoration";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

import Modal from '../Common/Modal';
import actions from '../../actions';
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
  ModalInputArea
} from "./styles";



@component
class Login {

  state = {
    showModal: false
  }

  componentDidMount() {

  }

  onSubmit = () => {

  }


  onToggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    })
  }

  onRenderModalField = (field) => {
    const {
      type,
      label,
      placeholder,
      input
    } = field;

    return (
      <ModalInputArea>
        <CustomModalLabel>{label}:</CustomModalLabel>
        <CustomInputField {...input} type={type} placeholder={placeholder} autoComplete="off" />
      </ModalInputArea>
    )
  }

  onRenderField = (field) => {
    const {
      type,
      label,
      placeholder,
      input
    } = field;

    return (
      <div>
        <CenterArea>
          <InputField key={label} {...input } type={type} placeholder={placeholder} autoComplete="off"/>
          <LoginLabel>{label}</LoginLabel>
        </CenterArea>
      </div>
    );
  }


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
                  <FormattedMessage 
                    id="test"
                    defaultMessage="取消"
                  />
                </CustomButtom>
                <CustomButtom show>
                  <FormattedMessage 
                    id="test"
                    defaultMessage="送出"
                  />
                </CustomButtom>
              </ButtonArea>
              <SigunupButton onClick={this.onToggleModal}>
                <span></span>
                <span></span>
              </SigunupButton>
              <SocialArea>
                <span><i className="fab fa-facebook-square"></i></span>
                <span><i className="fab fa-google"></i></span>
              </SocialArea>
            </form>
          </LoginCard>
        </Container>
        { showModal ? (
          <Modal onToggleModal={this.onToggleModal} showModal={showModal}>
            <Field 
              label="email" 
              name="email" 
              type="text" 
              placeholder="please enter your email" 
              component={this.onRenderModalField}
            />
            <Field 
              label="password" 
              name="password" 
              type="password" 
              placeholder="please enter your password" 
              component={this.onRenderModalField}
            />
          </Modal>
        ) : null }
      </Fragment>
    );
  }
}

const validate = () => {
  // const erros = {};
}


export default withRouter(connect(null, { ...actions })(reduxForm({
  form: 'login',
  validate
})(Login)));
