import styled from "styled-components";
import {
  CenterDiv,
  Button
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
  opacity: 1;
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
  height: 100%;
  display: flex;
  align-items: center;
`;

export const InputSection = styled.div`
  height: 42.5%;
  width: 100%;
`;

export const InputArea = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 2rem;
  & > div {
    position: relative;
    width: 100%;
    height: 45%;
  }
`;

export const InputField = styled.input`
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
  color: #fff;
  font-size: 1.5rem;
  /* color: hsla(170, 85%, 95%, 0.21); */
  &:focus {
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
`;

export const LoginLabel = styled.label`
  position: absolute;
  top: 0;
  left: 10%;
  text-align: left;
  display: block;
  font-weight: 800;
  width: auto;
  height: auto;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  transition: all 0.5s ease-in-out;
  ${InputField}:focus + & {
    color: #fff;
  }
`;

export const ButtonArea = styled.div`
  max-width: 100%;
  height: 25%;
  /* background-color: #ddd; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomButtom = styled(Button)`
  height: 80%;
  background-color: inherit;
  opacity: 0.6;
  font-size: 1.5rem;
  position: relative;
  color: #fff;
  border-radius: 1rem;
  margin-left: ${props => props.show ? '1.5rem' : '0'};
  &:hover {
    color: #000;
  }

  &::before {
    position: absolute;
    top:0;
    right: 0;
    content: '';
    width: 0px;
    height: 100%;
    display: block;
    z-index: -1;
    transition: all .7s ease;
    border-radius: 1rem;
  }

  &:hover::before {
    left: 0;
	  right: 0;
	  width: 100%;
    opacity: 0.6;
    background-color: ${props => props.show ? 'pink' : 'lightgreen'}
  } 
`;