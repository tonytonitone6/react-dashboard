import styled from 'styled-components';


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
      margin-right: .5rem;
    }
  }
`;