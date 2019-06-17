import styled, { css } from 'styled-components';
import elements from 'styles/elements';



const orangeButton = '#E74C3C';
const riverColor = '#74b9ff';

const buttonStyle = css`
  position: relative;
  height: 2.5rem;
  width: 8rem;
  border: none;
  color: #fff;
  overflow: hidden;
  border-radius: .1rem;
  cursor: pointer;
`;

const shadow = css`
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 90%;
  left: 0;
  right: 0;
  background-color: black;
  opacity: .5;
`;

export const TableDetail = styled.div`
  height: 80%;
`;

export const CommonTable = styled.table`
  width: 100%;
  table-layout: fixed;

  & > thead {
    & > tr > td {
      color: #fff;
      font-weight: 500;
      height: 2rem;
      vertical-align: middle;
      text-align: center;
    }

    & > tr.trSpacing {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      height: 3.5rem;
      &:hover {
        & > td {
          background-color: #000;
        }
      }
      
      & > td {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #353b48;
        border-right: .2rem solid #435050;
        border-bottom: .1rem solid #000;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const TableHeader = styled.div`
  background-color: rgba(255,255,255,0.3);

  
  & > table {
    width: 100%;
  }

  & tr {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    /* justify-content: space-around; */

    & > th {
      padding: 2rem 5rem;
      font-weight: 600;
      font-size: 1.2rem;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;

export const ButtonArea = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button:first-child {
    margin-right: 1rem;
  }
`;

export const EditButton = styled(elements.CommonButton)`
  ${buttonStyle};
  background-color: ${riverColor};

  &::after {
    ${shadow}
  }

  /* &:hover::after {
    transform: translateY(-90%);
    transition: all .3s linear;
  } */
`;

export const DeleteButton = styled(elements.CommonButton)`
  ${buttonStyle};
  background-color: ${orangeButton};

  &::after {
    ${shadow}
  }
`;



