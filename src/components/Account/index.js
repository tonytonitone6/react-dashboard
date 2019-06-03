import React, { Fragment } from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
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
import Modal from '../../common/Modal';

@pureComponent
class Account {

  state = {
    userInfo: Map({
      userName: "",
      email: ""
    }),
    showModal: false
  }

  componentDidMount() {
    const { accountList } = this.props;
    if (accountList && typeof accountList !== 'undefined') {
      accountList();
    }
  }

  onEditItem = item => {
    this.setState({
      showModal: true
    })
  }

  onToggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    });
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
    const { 
      userInfo,
      showModal
    } = this.state;
    const userName = userInfo.get("userName");
    const email = userInfo.get("email");

    return (
      <Fragment>
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
            onEditFunc={this.onEditItem}
          />
        </AccountContainer>
        { showModal
            ? <Modal 
                onToggleModal={this.onToggleModal} 
                showModal={showModal}
                width="80rem"
                height="60rem"
              >

              </Modal>
            : null
        }
      </Fragment>
    );
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
    },
    {
      id: '004',
      name: ''
    }
  ]
};

const validate = values => {
  
}


const mapStateToProps = createStructuredSelector({
  accounts: getAccountList
});

export default 
  connect(
    mapStateToProps, 
    { ...actions }
  )(
    reduxForm({
      form: 'account',
      validate
  })(Account));
