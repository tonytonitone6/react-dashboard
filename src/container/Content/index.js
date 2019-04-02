import React from 'react';
import { connect } from 'react-redux';
import { pureComponent } from 'react-decoration';
import {
  MainContainer
} from './styles';

@pureComponent
class Content {
  render() {
    return (
      <MainContainer />
    );
  }
}

export default connect(null, null)(Content);
