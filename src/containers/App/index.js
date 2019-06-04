import React from "react";
import { pureComponent } from 'react-decoration';
import { BrowserRouter as Router } from 'react-router-dom'

import menuList from 'asset/sidemenu.json';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'containers/Content';
import SideNav from 'containers/SideNav';
import authRoute from "../Hoc/authHoc";
import {
  Container
} from './styles';

@authRoute
@pureComponent
class App {
  render() {
    return (
      <Router>
        <Container>
          <SideNav menuList={menuList} />
          <Header />
          <Content />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;

