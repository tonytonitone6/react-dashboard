import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';

import actions from '../../actions';
import { 
  getAccountList
} from '../../selectors/accountSelector';
import {
  AccountContainer,
  SearchField,
  SearchInput,
  SubButton
} from './styles';
import Table from '../../common/Table';

@pureComponent
class Account {

  state = {
    userInfo: Map({
      userName: "",
      email: ""
    })
  }

  componentDidMount() {
    const { accountList } = this.props;
    if (accountList && typeof accountList !== 'undefined') {
      accountList();
    }
  }

  onReceivedName = (e) => {
    const { userInfo } = this.state;
    const userName = e.target.value;
    
    this.setState({
      userInfo: userInfo.set("userName", userName)
    });
  }

  onReceivedEmail = (e) => {
    const { userInfo } = this.state;

    this.setState({
      userInfo: userInfo.set("email", e.target.value)
    });
  }

  onSearchButton = (e) => {
    e.preventDefault();
    const { userInfo } = this.state;
    const { searchUser } = this.props;

    if (searchUser && typeof searchUser !== 'undefined') {
      searchUser(userInfo);
    }
    this.setState({
      userInfo: userInfo.set("userName", "").set("email", "")
    });
  }

  render() {
    const { accounts, fields } = this.props;
    const { userInfo } = this.state;
    const userName = userInfo.get("userName");
    const email = userInfo.get("email");
    return (
      <AccountContainer>
        <SearchField>
          <SearchInput>
            <input 
              onChange={this.onReceivedName} 
              placeholder="Please enter your username"
              type="text"
              value={userName}
            />
          </SearchInput>
          <SearchInput>
            <input 
              onChange={this.onReceivedEmail} 
              placeholder="Please enter your email"
              type="text" 
              value={email}
            />
          </SearchInput>
          <SubButton 
            type="submit" 
            onClick={this.onSearchButton}
          >
            Search
          </SubButton>
        </SearchField>
        <Table 
          fields={fields}
          accountList={accounts}
        />
      </AccountContainer>
    )
  }
}

Account.defaultProps = {
  accounts: [],
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
};


const mapStateToProps = createStructuredSelector({
  accounts: getAccountList
});

export default connect(mapStateToProps, { ...actions })(Account);
