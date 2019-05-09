import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ChatRoom from '../../common/ChatRoom';
import {
  HeaderContainer
} from './styles';

class Header extends PureComponent {
  render() {
    return (
      <HeaderContainer>
        <ChatRoom></ChatRoom>
      </HeaderContainer>
    );
  }
}

export default connect(null, null)(Header);