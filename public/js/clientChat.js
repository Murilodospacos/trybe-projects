const socket = window.io('http://localhost:3000');

const datatestId = 'data-testid';
const onlineUser = '.online-user';
const form = document.querySelector('#form');
const inputMessage = document.querySelector('#message-input');
const inputNickname = document.querySelector('#input-nickname');
const nicknameForm = document.querySelector('#nickName-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newNickname = sessionStorage.nickname;
    if (inputMessage.value) {
      socket.emit('message', {
        chatMessage: inputMessage.value,
        nickname: newNickname,
      });
      inputMessage.value = '';
    }
    return false;
});

nicknameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const inputValue = inputNickname.value;
  const username = document.querySelector(onlineUser);
  username.innerText = inputValue;
  socket.emit('updateNickName', {
  oldNickName: sessionStorage.nickname,
  newNickName: inputValue,
  });
  sessionStorage.setItem('nickname', inputValue);
});

socket.on('updateNick', (oldNickName, newNickName) => {
  const getUsers = document.querySelectorAll(onlineUser);
  getUsers.forEach((userOnline) => {
    // https://stackoverflow.com/questions/35637770/how-to-avoid-no-param-reassign-when-setting-a-property-on-a-dom-object 
    const el = userOnline;
    if (el.innerText === oldNickName) {
      el.innerText = newNickName;
    }
  });
});

const createNewMessage = (message) => {
  const messagesUl = document.querySelector('.messages');
  const li = document.createElement('li');
  li.innerText = message;
  li.setAttribute(datatestId, 'message');
  li.setAttribute('class', 'message');
  messagesUl.appendChild(li);
};

const createUserList = (dataNickNames) => {
  const usersUl = document.querySelector('#list-users-online');
  const li = document.createElement('li');
  li.innerText = dataNickNames;
  li.setAttribute(datatestId, 'online-user');
  li.setAttribute('class', 'online-user');
  usersUl.appendChild(li);
};

socket.on('connection', (id) => {
  createUserList(id);
});

socket.on('userOnline', (data) => {
  // adicionando o ultimo usuario
  const lastIndex = data[data.length - 1];
  sessionStorage.setItem('nickname', lastIndex);
  createUserList(lastIndex);
  for (let i = 0; i < data.length - 1; i += 1) {
    createUserList(data[i]);
  }
});

socket.on('message', (msg) => {
createNewMessage(msg);
});

socket.on('disconected', (id) => {
  const usersOnline = document.querySelectorAll('.online-user');
  usersOnline.forEach((userOnline) => {
    // https://stackoverflow.com/questions/35637770/how-to-avoid-no-param-reassign-when-setting-a-property-on-a-dom-object 
    const el = userOnline;
    if (el.innerText === id) {
      el.remove();
    }
  });
});

const fetchChat = async () => {
  const fetchdata = await fetch('http://localhost:3000/chatweb');
  const response = await fetchdata.json();
  for (let index = 0; index < response.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = `
    ${response[index].timestamp}${response[index].nickname}${response[index].message}`;
    document.querySelector('.messages').appendChild(li);
  }
};

fetchChat();