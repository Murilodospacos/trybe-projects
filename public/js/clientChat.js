const socket = window.io();

const datatestId = 'datatestId';
const form = document.querySelector('form');
const inputMessage = document.querySelector('#message-input');
const inputNickname = document.querySelector('#input-nickname');
const btnSalvar = document.querySelector('#btn-salvar');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newNickname = sessionStorage.getItem('username');
    if (inputMessage.value) {
      socket.emit('message', {
        chatMessage: inputMessage.value,
        nickname: newNickname,
      });
      inputMessage.value = '';
    }
    return false;
});

btnSalvar.addEventListener('click', (event) => {
  event.preventDefault();
  sessionStorage.setItem('username', inputNickname.value);
  const data = sessionStorage.getItem('username');
  if (inputNickname.value) {
    socket.emit('updateNickName', data);
  } else {
    socket.emit('updateNickName', inputNickname.value);
  }
  inputNickname.value = '';
  return false;
});

const createNewMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  li.setAttribute(datatestId, 'message');
  messagesUl.appendChild(li);
};

const createUserList = (dataNickNames, id) => {
  const usersUl = document.querySelector('#list-users-online');
  const li = document.createElement('li');
  li.innerText = dataNickNames;
  li.setAttribute(datatestId, 'online-user');
  li.setAttribute('id', id);
  usersUl.appendChild(li);
};

const user = sessionStorage.getItem('username') || socket.id.slice(-16);
sessionStorage.setItem('username', user);

socket.emit('userOnline', { user });

socket.on('userOnline', (data) => {
  sessionStorage.setItem('username', data);
  createUserList(data);
});

socket.on('message', (msg) => {
createNewMessage(msg);
});

socket.on('addLoggedUser', (data) => {
  createUserList(data);
  const username = sessionStorage.getItem('username');
  socket.emit('addLoggedUser', username);
});

socket.on('updateNickName', (dataUser) => {
  createUserList(dataUser);
});

// window.onload = () => {
//   setTimeout(() => { 
    
//     sessionStorage.setItem('username', randomUser);
//     socket.emit('userOnline', randomUser);
//   }, 200);
//  };
