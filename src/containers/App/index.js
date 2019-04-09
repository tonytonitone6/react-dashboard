import React from "react";
import { pureComponent } from 'react-decoration';

import authRoute from "../Hoc/authHoc";
import menuList from '../../asset/sidemenu.json';
import {
  Container
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../Content';
import SideNav from '../SideNav';

@authRoute
@pureComponent
class App {
  render() {
    return (
      <Container>
        <SideNav menuList={menuList} />
        <Header />
        <Content />
        <Footer />
      </Container>
    );
  }
}

export default App;

