import styled from 'styled-components';


export const FullShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
`;

export const SignupArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  height: 50rem;
  border-radius: 5%;
  background-color: #fff;
`;

export const ModalContainer = styled.div`
  position: relative;
`;