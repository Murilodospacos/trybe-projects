const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 

require('./sockets/ServerChat')(io);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});