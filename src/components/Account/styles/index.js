import styled, { keyframes } from 'styled-components';
import elements from 'styles/elements';

const gradient = keyframes`
  0% {
    background-position:0 0
  }

  100% {
    background-position:100% 0
  }
`;


export const AccountContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#151818, #050606);
`;

export const SearchField = styled.div`
  width: 100%;
  height: 20%;
  min-height: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SearchInput = styled.div`
  position: relative;
  width: 100%;
  max-width: 30rem;
  background-color: rgba(57, 63, 84, 0.8);

  & > input {
    display: inline-block;
    color: #7881A1;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 1.2rem 1.5rem;
    font-size: 1.5rem;
    line-height: 2.4rem;
    vertical-align: middle;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: .2rem;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: ${gradient} 3s linear infinite;
  }
`;


export const SubButton = styled(elements.CommonButton)`
  
  background-color: #009ac9;
  height: 3.5rem;
  width: 15rem;
  color: #fff;
  border: 1px solid transparent;
  box-shadow: .3rem -.3rem .2rem #000;
  &:hover {
    font-weight: 1000;
    font-size: 1.2rem;
    background-color: #fff;
    color: #000;
    transition: all .5s ease-in;
  }

  &:active {
    box-shadow: none;
    transition: all .1s ease-in;
  }
`;

export const EditArea = styled.div`
  width: 100%;
  height: 4rem;
  padding-left: 2rem;
  font-size: 2rem;
  margin: 2rem 0;
  &:nth-child(1) {
    margin-top: 10rem;
  }

`;

export const EditLabel = styled.label`
  display: inline-block;
  width: 5rem;
  margin-right: 2rem;
`;

export const EditInput = styled(elements.CustomInputField)`
  border-radius: 1rem;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  padding: 2rem;
  height: 100%;
  transition: border-color .5s ease;
  &:hover {
    border-color: #40a9ff;
  }
`;

export const UploadButton = styled.label`
  display: inline-block;
  width: 6rem;
  height: 3rem;
  background-color: pink;
  & > input[type="file"] {
    display: none;
  }
`;