import styled from 'styled-components';


export const CommonTable = styled.table`
  width: 100%;
  table-layout: fixed;
  
  & td {
    color: #fff;
    font-weight: 500;
    height: 2rem;
    vertical-align: middle;
    text-align: center;
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
    grid-template-columns: 1fr 1fr 1fr;
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


export const TableDetail = styled.div`
  height: 80%;
  /* overflow: auto */
  border: .1rem solid rgba(255, 255, 255, .3);
`;



