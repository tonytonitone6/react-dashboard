import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';

import actions from '../../actions';
import {
  AccountContainer,
  SearchField,
  SearchInput
} from './styles';
import Table from '../../common/Table';

@pureComponent
class Account {

  state = {
    
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

  componentDidMount() {
    const { accountList } = this.props;
    if (accountList && accountList !== 'undefined') {
      accountList();
    }
  }

  onReceviedName = (e) => {
    console.log(e.target.value);
  }

  onReceviedEmail = (e) => {
    console.log(e);
  }

  render() {
    const { fields } = this.state;

    return (
      <AccountContainer>
        <SearchField>
          <SearchInput>
            <input 
              onChange={this.onReceviedName} 
              placeholder="Please enter your username"
              type="text" 
            />
          </SearchInput>
          <SearchInput>
            <input 
              onChange={this.onReceviedEmail} 
              placeholder="Please enter your email"
              type="text" 
            />
          </SearchInput>
        </SearchField>
        <Table 
          fields={fields}
        />
      </AccountContainer>
    )
  }
}

const mapStateToProps = (state) => ({

  }) 

export default connect(mapStateToProps, { ...actions })(Account);
