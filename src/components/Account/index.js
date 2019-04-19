import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';

import {
  AccountContainer,
  SearchField
} from './styles';
import Table from '../../common/Table';

@pureComponent
class Account {

  state = {
    // field: ['userName', 'email', 'createTime']
    fields: [
      {
        id: '001',
        name: 'userName'
      },
      {
        id: '002',
        name: 'email'
      },
      {
        id: '003',
        name: 'createTime'
      }
    ]
  }

  render() {
    const { fields } = this.state;

    return (
      <AccountContainer>
        <SearchField>
          
        </SearchField>
        <Table 
          fields={fields}
        />
      </AccountContainer>
    )
  }
}

export default connect(null, null)(Account);
