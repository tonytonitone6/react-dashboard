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
  color: #ddd;

  &:hover {
    /* background-color: rgba(255, 255, 255, .2); */
    cursor: pointer;
  }
`;

export const InsideDiv = styled.div`
  font-size: 1.4rem;
  padding: 2rem 2rem 2rem 4rem;
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
  background-color: darken(0.1, #394263);
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  max-height: ${props => props.active ? '20rem' : '0'};
  overflow: hidden;
  transition: all .3s ease-in-out;
  width: 100%;
  & > li {
    /* padding: .8rem 1rem; */
    padding: 1rem 0 1rem 6rem;
    font-size: 1.4rem;
    text-transform:capitalize;
    color: #fff;
    background-color: #262c43;

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