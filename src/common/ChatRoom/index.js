import React, { Fragment } from 'react';
import { pureComponent } from 'react-decoration';
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
      <Fragment>
        456
      </Fragment>
    )
  }
}

export default ChatRoom;