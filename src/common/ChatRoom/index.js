import React, { Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import { pureComponent } from 'react-decoration';

import MessageList from 'components/ＭessageList';
import {
  ChatArea,
  ChatButtonLine,
  CommunicationField,
  AddMessage
} from './styles';

// import socketIOClient from 'socket.io-client';

// const socketPort = 'http://localhost:7100';


@pureComponent
class ChatRoom {
  message = createRef();

  state = {
    active: false
  }

  // socket = socketIOClient(socketPort);

  componentDidMount() {
    // this.socket.emit('receivedMessage', '連線到囉');
  }


  onOpenChatRoom = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }));
  }

  onSendMessage = (e) => {
    const {
      sendMessage
    } = this.props;
    const { 
      value 
    } = this.message.current;
    
    if (e.key === 'Enter') {
      sendMessage(value);
      this.message = '';
    }
  }

  componentWillUnmount() {
    this.message = null;
  }
  

  render() {

    const { active } = this.state;

    return (
      <Fragment>
        <ChatArea
          className={active === true ? 'active' : ''}
          onClick={this.onOpenChatRoom} 
        >
          <ChatButtonLine />
          <ChatButtonLine />
        </ChatArea>
        <CommunicationField 
          className={active === true ? 'active' : ''} 
        >
          { 
            active && active === true 
            ? [
                <MessageList 
                  key="MessageList" 
                />, 
                <AddMessage
                  ref={this.message}
                  onKeyPress={this.onSendMessage} 
                  key="AddMessage" 
                />
              ] 
            : null
          }
        </CommunicationField>
      </Fragment>
    )
  }
}

export default connect(null, { ...actions })(ChatRoom);