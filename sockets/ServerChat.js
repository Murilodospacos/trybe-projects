const { format } = require('date-fns');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message',
    `${format(new Date(), 'dd-MM-yyyy HH:mm:ss')} ${msg.nickname}: ${msg.chatMessage}`);
  });
});
