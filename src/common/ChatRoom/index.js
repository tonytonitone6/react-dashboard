import React from 'react';
import { pureComponent } from 'react-decoration';

import {
  ChatArea
} from './styles';
// import socketIOClient from 'socket.io-client';

// const socketPort = 'http://localhost:7100';


@pureComponent
class ChatRoom {

  // socket = socketIOClient(socketPort);

  componentDidMount() {
    // this.socket.emit('receivedMessage', '連線到囉');
  }


  render() {
    return (
      <ChatArea>

      </ChatArea>
    )
  }
}

export default ChatRoom;