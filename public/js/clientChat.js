const socket = window.io();
// const random = require('random-name');

const form = document.querySelector('form');
const inputMessage = document.querySelector('#message-input');
const messagesUl = document.querySelector('#list-messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    // 1º envia mensagem para servidor
    if (inputMessage) {
      socket.emit('message', {
        chatMessage: inputMessage.value,
        nickname: socket.id,
      });
      inputMessage.value = '';
    }
    return false;
});

const createNewMessage = (message) => {
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

// 4º recebe mensagem do servidor
socket.on('message', (msg) => {
createNewMessage(msg);
window.scrollTo(0, document.body.scrollHeight);
});