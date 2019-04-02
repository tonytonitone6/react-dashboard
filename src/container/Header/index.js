import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  HeaderContainer
} from './styles';

class Header extends PureComponent {
  render() {
    return (
      <HeaderContainer />
    );
  }
}

export default connect(null, null)(Header);