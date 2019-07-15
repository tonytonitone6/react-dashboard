import React, { Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import actions from 'actions';
import { pureComponent } from 'react-decoration';

import MessageItem from './MessageItem';

import {
  ChatArea,
  ChatButtonLine,
  CommunicationField,
  AddMessage
} from './styles';

@pureComponent
class ChatRoom {
  message = createRef();

  state = {
    active: false
  }

  onOpenChatRoom = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }));
  }

  isActive = (status) => status === true ? 'active' : '';

  onSendMessage = (e) => {
    const {
      sendMessage
    } = this.props;
    const { 
      value 
    } = this.message.current;
  
    if (e.key === 'Enter' && value !== '') {
      sendMessage(value);
      this.message.current.value = '';
    }
  }

  componentWillUnmount() {
    this.message = null;
  }
  
  render() {

    const { 
      active
    } = this.state;

    const {
      messages
    } = this.props;

    return (
      <Fragment>
        <ChatArea
          className={this.isActive(active)}
          onClick={this.onOpenChatRoom} 
        >
          <ChatButtonLine />
          <ChatButtonLine />
        </ChatArea>
        <CommunicationField 
          className={this.isActive(active)} 
        >
          { 
            active && active === true 
            ? [
                <MessageItem 
                  key="MessageList"
                  messages={messages.get('messageList')}
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

const mapStateToProps = ({messageList}) => ({
    messages: messageList
  });


export default connect(mapStateToProps, { ...actions })(ChatRoom);