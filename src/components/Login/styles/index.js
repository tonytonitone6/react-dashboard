import styled from "styled-components";
import {
  CenterDiv
} from '../../CommonStyle';

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  position: relative;
`;

export const LoginCard = styled.div`
  height: 75%;
  max-height: 500px;
  width: 50%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d3436;
  border-radius: 10px;
  opactity: 1;
  box-shadow: 10px 10px 0.9;

  @media (max-width: 768px) {
    height: 60%;
    max-height: 400px;
    width: 60%;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    height: 50%;
    max-height: 250px;
    width: 75%;
    max-width: 300px;
  }
`;

export const CenterArea = styled(CenterDiv)`
  height: 30%;
`;

export const InputSection = styled.div`
  height: 55%;
  width: 100%;
`;

export const InputArea = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const InputField = styled.input.attrs({
  type: props => (props.show ? "text" : "password")
})`
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  height: 5%;
  padding: 14px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.5s ease-in-out;
  margin: 10px 0;
  color: hsla(170, 85%, 95%, 0.21);
  &:focus {
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
`;

export const LoginLabel = styled.label`
  position: relative;
  text-align: left;
  display: block;
  font-weight: 800;
  font-size: .8rem;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  transition: all 0.5s ease-in-out;
`;