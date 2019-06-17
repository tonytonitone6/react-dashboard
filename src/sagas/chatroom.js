export function sendMessage(socket, action) {
  const { payload } = action;
  socket.emit('receivedMessage', payload);
}
