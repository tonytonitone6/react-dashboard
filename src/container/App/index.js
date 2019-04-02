import React from "react";
import { pureComponent } from 'react-decoration';

import authRoute from "../hoc/authHoc";
import {
  Container
} from './styles';
import Header from '../Header';
import { HeaderSearch } from '../../components/Header';
import Footer from '../Footer';
import Content from '../Content';
import SideNav from '../Sidemenu';

@authRoute
@pureComponent
class App {
  render() {
    return (
      <Container>
        <SideNav>
          <HeaderSearch />
        </SideNav>
        <Header>

        </Header>
        <Content>
          
        </Content>
        <Footer>

        </Footer>
      </Container>
    );
  }
}

export default App;

