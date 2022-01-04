const { format } = require('date-fns');
const axios = require('axios');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    const timestamp = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
    io.emit('message',
    `${timestamp} ${msg.nickname}: ${msg.chatMessage}`);

      axios.post('http://localhost:3000', {
        message: msg.chatMessage,
        nickname: msg.nickname,
        timestamp,
      });
  });
});
