import styled from 'styled-components';



const Container = styled.div`
  display: flex;
`;

const Col4 = styled.div`

  @media (min-width: 1024px) {
    flex: 0 0 33.3%;
  }

  @media (max-width: 815px) {
    flex: 0 0 50%;
  }

  @media (max-width: 555px) {
    flex: 0 0 100%;
  }
`;

const Col6 = styled.div`
  @media (min-width: 1024px) {
    flex: 0 0 50%;
  }

  @media (max-width: 815px) {
    flex: 0 0 50%;
  }

  @media (max-width: 555px) {
    flex: 0 0 100%;
  }
`;

export default {
  Container,
  Col6,
  Col4,
};