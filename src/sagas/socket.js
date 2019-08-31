import socketIOClient from 'socket.io-client';
import actions from 'actions';

const socketPort = 'http://localhost:7100';

const socketConnect = (dispatch) => {
  const socket = socketIOClient(socketPort);
  socket.on('addMessage', message => {
    dispatch(actions.addMessageList(message))
  });

  return socket;
}


export default socketConnect;