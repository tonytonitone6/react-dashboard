import styled from 'styled-components';
import { darken } from 'polished';

export const SidemenuContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: sidenav;
  background-color: #394263;
  transform: ${props => props.active ? 'translateX(0)' : 'translateX(-26rem)'};
  transition: all .6s ease-in-out;
`;

export const SideMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 8.5rem;
`;

export const SideMenuItem = styled.li`
  padding: 2rem 2rem 2rem 4rem;
  color: #ddd;

  &:hover {
    background-color: rgba(255, 255, 255, .2);
    cursor: pointer;
  }
`;

export const InsideDiv = styled.div`
  font-size: 1.4rem;
  & > span {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

export const InsideUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  background-color: darken(0.05,#000);
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  overflow: hidden;
  max-height: ${props => props.active ? '20rem' : '0'};
  transition: all .2s ease-in-out;
  & > li {
    padding: .8rem 1rem;
    font-size: 1.4rem;
    text-transform:capitalize;
    color: #fff;
    background-color: 'light-green';

    &:first-child {
      padding-top: 1.2rem;
    }

    & > span {
      margin-right: 1rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, .1);
      cursor: pointer;
    }

  }
`;