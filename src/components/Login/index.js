import React from "react";
import { component } from "react-decoration";
import { createGlobalStyle } from "styled-components";
import { 
  Container, 
  LoginCard, 
  InputSection,
  InputArea,
  InputField,
  CenterArea
} from "./styles";

const GlobalStyle = createGlobalStyle`
  * {
    height: 100%;
    width: 100%;
    :focus {
      outline: none;
    }
  }

  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
`;

@component
class Login {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <LoginCard>
            <InputSection>
              <InputArea>
                <CenterArea>
                  <InputField show />
                </CenterArea>
                <CenterArea>
                  <InputField />
                </CenterArea>
              </InputArea>
            </InputSection>
          </LoginCard>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
