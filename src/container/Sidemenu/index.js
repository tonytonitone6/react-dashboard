import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  SidemenuContainer
} from './styles'


class Sidemenu extends PureComponent {

  render() {
    return (
      <SidemenuContainer />
    );
  }
}

export default connect(null, null)(Sidemenu);