import styled from 'styled-components';


export const SidemenuContainer = styled.div`
  grid-area: sidenav;
  background-color: #394263;
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