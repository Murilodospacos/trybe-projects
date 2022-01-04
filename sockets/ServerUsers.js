let arrayUsersOnline = [];

module.exports = (io) => io.on('connection', (socket) => {
  let id = socket.id.slice(-16);
  arrayUsersOnline.push(id);

  socket.broadcast.emit('connection', id);

  socket.emit('userOnline', arrayUsersOnline);

  socket.on('updateNickName', ({ oldNickName, newNickName }) => {
    id = newNickName;
    arrayUsersOnline = arrayUsersOnline.map((item) => (item === oldNickName ? newNickName : item));

    socket.broadcast.emit('updateNick', oldNickName, newNickName);
  });

  socket.on('disconnect', () => {
    arrayUsersOnline = arrayUsersOnline.filter((element) => element !== id);
    socket.broadcast.emit('disconected', id);
  });
});