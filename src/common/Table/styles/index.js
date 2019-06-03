import styled from 'styled-components';


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
        height: 100%;
        padding: 1rem;
        background-color: #353b48;
        border-right: .2rem solid #435050;
        border-bottom: .3rem solid #000;
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


