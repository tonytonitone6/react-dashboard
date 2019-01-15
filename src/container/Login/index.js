import React, { Fragment } from "react";
import { component } from "react-decoration";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
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
  CustomButtom
} from "./styles";



@component
class Login {

  componentDidMount = () => {

  }

  onSubmit = () => {

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
          <InputField {...input } type={type} placeholder={placeholder} autoComplete="off" />
          <LoginLabel>{label}</LoginLabel>
        </CenterArea>
      </div>
    );
  }


  render() {
    return (
      <Fragment>
        <Container>
          <LoginCard>
            <form onSubmit={this.onSubmit}>
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
              </InputSection>
            </form>
          </LoginCard>
        </Container>
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
