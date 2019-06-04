import React, { Fragment } from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';

import { 
  getAccountList
} from 'selectors/accountSelector';
import actions from 'actions';
import Table from 'common/Table';
import Modal from 'common/Modal';

import {
  AccountContainer,
  SearchField,
  SearchInput,
  SubButton,
  EditArea,
  EditLabel,
  EditInput
} from './styles';


@pureComponent
class Account {

  state = {
    userInfo: Map({
      userName: "",
      email: "",
      avatar: ""
    }),
    showModal: false,
  }

  componentDidMount() {
    const { accountList } = this.props;
    if (accountList && typeof accountList !== 'undefined') {
      accountList();
    }
  }

  onEditItem = item => {
    this.setState((prevState) => ({
      userInfo: prevState.userInfo
        .set('userName', item.name)
        .set('email', item.email),
      showModal: true
    }), () => console.log(this.state));
  }

  onDeleteItem = _id => {
    const { deleteAccount } = this.props;

    if (deleteAccount && typeof deleteAccount === 'function') {
      deleteAccount(_id);
    }
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

  onRenderEditContent = field => {
    const { 
      type, 
      label,
      name,
      placeholder, 
      input 
    } = field;
    console.log(name);
    const { 
      userInfo 
    } = this.state;

    return (
      <EditArea>
        <EditLabel>{label}</EditLabel>
        <EditInput 
          {...input} 
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          value={userInfo.get(name)}
        />
      </EditArea>
    );
  }

  onChangeEditData = (keyName, e) => {    
    this.setState((prevState) => ({
      userInfo: prevState.userInfo.set(keyName, e.target.value)
    }), console.log(this.state));
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
            onDeleteItem={this.onDeleteItem}
          />
        </AccountContainer>
        { showModal ? 
          <Modal 
            onToggleModal={this.onToggleModal} 
            showModal={showModal}
            width="70rem"
            height="50rem"
          >
            <Field 
              label="Name"
              name="userName"
              type="text"
              placeholder="Please enter your name"
              component={this.onRenderEditContent}
              onChange={this.onChangeEditData.bind(this, 'userName')}
            />
            <Field 
              label="Email"
              name="email"
              type="text"
              placeholder="Please enter your email"
              component={this.onRenderEditContent}
              onChange={this.onChangeEditData.bind(this, 'email')}
            />
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
  // console.log(values);
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
