import styled, { css } from 'styled-components';

const aniButton = css`
  & > span:nth-child(1) {
    transform: translate(-15px, -2px) rotate(45deg);
  }

  & > span:nth-child(2) {
    transform: translate(-15px, -2px) rotate(-45deg);
  }
  background-color: red;
`;

export const ChatArea = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #fff;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
  cursor: pointer;
  transition: all 1s linear;

  &.active {
    & > span:nth-child(1) {
    transform: translate(-15px, -2px) rotate(45deg);
    }

    & > span:nth-child(2) {
    transform: translate(-15px, -2px) rotate(-45deg);
    }
    background-color: red;
  }
`;

export const ChatButtonLine = styled.span`
  position: absolute;
  display: inline-block;
  width: 2.5rem;
  height: .3rem;
  background-color: #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .5s ease;
  &:nth-child(2) {
    transform: translateX(-50%) rotate(90deg);
  }

  ${ChatArea}:hover > & {
    ${aniButton}
  }
`;

export const CommunicationField = styled.div`
    position: absolute;
    border-radius: 10px;
    width: 0;
    height: 0;
    background-color: #fff;
    z-index: 1;
    bottom: 4rem;
    right: 4.5rem;
    transition: all .3s ease;

    &.active {
      width: 25rem;
      height: 30rem;
    }
`;

export const AddMessage = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 1rem;
`;