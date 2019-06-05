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
    searchInfo: Map({
      userName: "",
      email: ""
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
    }));
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
    const { searchInfo } = this.state;
    const userName = e.target.value;
    
    this.setState({
      searchInfo: searchInfo.set("userName", userName)
    });
  }

  onReceivedEmail = (e) => {
    const { searchInfo } = this.state;

    this.setState({
      searchInfo: searchInfo.set("email", e.target.value)
    });
  }

  onSearchButton = (e) => {
    e.preventDefault();
    const { searchInfo } = this.state;
    const { searchUser } = this.props;

    if (searchUser && typeof searchUser !== 'undefined') {
      searchUser(searchInfo);
    }
    this.setState({
      searchInfo: searchInfo.set("userName", "").set("email", "")
    });
  }

  onRenderEditContent = field => {
    const { 
      type, 
      label,
      placeholder,
      keyType: key = "",
      input 
    } = field;

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
          value={ key !== "" ? userInfo.get(key) : ""}
        />
      </EditArea>
    );
  }

  onChangeEditData = (key, e) => {    
    this.setState((prevState) => ({
      userInfo: prevState.userInfo.set(key, e.target.value)
    }));
  }

  render() {
    const { accounts, fields } = this.props;
    const { 
      searchInfo,
      showModal
    } = this.state;
    const userName = searchInfo.get("userName");
    const email = searchInfo.get("email");

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
              onKeyPress={this.onSearchButton}
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
              keyType="userName"
              placeholder="Please enter your name"
              component={this.onRenderEditContent}
              onChange={this.onChangeEditData.bind(this, 'userName')}
            />
            <Field 
              label="Email"
              name="email"
              type="text"
              keyType="email"
              placeholder="Please enter your email"
              component={this.onRenderEditContent}
              onChange={this.onChangeEditData.bind(this, 'email')}
            />
            <Field 
              label="upload photo"
              name="file"
              type="file"
              component={this.onRenderEditContent}
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

// const validate = values => {
//   console.log(values);
// }


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
      // validate
  })(Account));
