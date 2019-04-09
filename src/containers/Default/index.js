import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';

import {
  ContentContainer
} from './styles';

@pureComponent
class DefaultPage {
  render() {
    return (
      <ContentContainer>
        default
      </ContentContainer>
    );
  }
}

export default connect(null, null)(DefaultPage);