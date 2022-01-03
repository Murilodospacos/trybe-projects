const { format } = require('date-fns');

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

  socket.on('message', (msg) => {
    io.emit('message',
    `${format(new Date(), 'dd-MM-yyyy HH:mm:ss')} ${msg.nickname}: ${msg.chatMessage}`);
  });

  socket.on('updateNickName', (dataNickName) => {
    // 3º envia mensagem para todos clientes
    io.emit('updateNickName', dataNickName);
  });

  // socket.on('disconnect', () => {
  //   io.emit('removeUser', username);
  // });
});
