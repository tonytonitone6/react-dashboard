import React from 'react';
import { connect } from 'react-redux';
import { pureComponent } from 'react-decoration';
import { Route, Switch, withRouter } from 'react-router-dom';

import Default from '../Default';
import {
  MainContainer
} from './styles';

@pureComponent
class Content {
  render() {
    const { match } = this.props;
    return (
      <MainContainer>
        <Switch>
          <Route exact path={match.url} component={Default} />
        </Switch>
      </MainContainer>
    );
  }
}

export default withRouter(connect(null, null)(Content))
