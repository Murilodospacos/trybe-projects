const usersNickName = {};

function newUser(socket, io) {
  return ({ nickname }) => {
    usersNickName[socket.id] = nickname;
    io.emit('userOnline', usersNickName);
  };
}

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('userOnline', newUser(socket, io));

  socket.emit('userOnline', usersNickName);

  socket.on('updateNickName', (dataNickName) => {
    // 3º envia mensagem para todos clientes
    io.emit('updateNickName', dataNickName);
  });

    // socket.on('disconnect', () => {
  //   io.emit('removeUser', username);
  // });
});