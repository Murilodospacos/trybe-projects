const { format } = require('date-fns');

module.exports = (io) => io.on('connection', (socket) => {
  console.log(`usuário ${socket.id} conectado`);

    // 2º recebe mensagem do cliente
  socket.on('message', (msg) => {
    // 3º envia mensagem para todos clientes
    // mauricio me ajudou
    // https://date-fns.org/docs/Getting-Started#installation
    io.emit('message',
    `${format(new Date(), 'dd-MM-yyyy HH:mm:ss')} ${msg.nickname}: ${msg.chatMessage}`);
  });
});