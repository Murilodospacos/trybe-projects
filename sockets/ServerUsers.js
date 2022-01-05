const { format } = require('date-fns');
const axios = require('axios');

let arrayUsersOnline = [];

const setMessage = (timestamp, nickname, chatMessage, io) => {
  io.emit('message',
  `${timestamp} - ${nickname}: ${chatMessage}`);

    axios.post('http://localhost:3000', {
      message: chatMessage,
      nickname,
      timestamp,
    });
};

module.exports = (io) => io.on('connection', (socket) => { 
  console.log(socket.id, 'SOCKETID ANTES');
  let id = socket.id.slice(-16);
  arrayUsersOnline.push(id); console.log(socket.id.slice(-16), 'DEPOIS');
  socket.broadcast.emit('connectionNewUser', id);

  socket.emit('userOnline', arrayUsersOnline);

  socket.on('updateNickName', ({ oldNickName, newNickName }) => {
    id = newNickName;
    arrayUsersOnline = arrayUsersOnline.map((item) => (item === oldNickName ? newNickName : item));
    socket.broadcast.emit('updateNick', oldNickName, newNickName);
  });

  socket.on('message', ({ chatMessage, nickname }) => {
    const timestamp = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
    setMessage(timestamp, nickname, chatMessage, io);
  });

  socket.on('disconnect', () => {
    arrayUsersOnline = arrayUsersOnline.filter((element) => element !== id);
    socket.broadcast.emit('disconected', id);
  });
});
