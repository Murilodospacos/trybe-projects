const addTask = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');

// 5 - Button Adiciona tarefa.
function addNewTalks() {
  addTask.addEventListener('click', () => {
    const textTalks = document.getElementById('texto-tarefa');
    const itenTasks = document.createElement('li');
    if (textTalks.value === '') {
      alert('Digite uma tarefa');
    } else {
      itenTasks.innerText = textTalks.value;
      listTasks.appendChild(itenTasks);
      textTalks.value = '';
    }
  });
}
addNewTalks();

// 7 - Pinta item da lista, e remove cor do item da lista. obs: Tive ajuda do Marlon Ramos e Gabriel Pimental
function colorItemList() {
  listTasks.addEventListener('click', (event) => {
    const myEvent = event.target;
    const myItenlist = document.getElementsByTagName('li');
    if (myEvent.localName === 'li') {
      for (let index = 0; index < myItenlist.length; index += 1) {
        myItenlist[index].classList.remove('selected');
      }
      myEvent.classList.add('selected');
    }
  });
}
colorItemList();

// 9 - Risca item da lista.
function streakItemList() {
  listTasks.addEventListener('dblclick', (itemEvent) => {
    const newEvent = itemEvent.target;
    newEvent.classList.toggle('completed');
  });
}
streakItemList();

// 10 - Button limpar lista inteira. Obs: Tive ajuda do Bruno Duarte.
const clearMylist = document.getElementById('lista-tarefas');
const buttonClear = document.getElementById('apaga-tudo');
function clearList() {
  clearMylist.innerHTML = '';
}
buttonClear.addEventListener('click', clearList);

// 11 - Button remove itens da lista finalizados. Obs: Tive ajuda do Bruno Duarte.
const buttonFinish = document.getElementById('remover-finalizados');
function clearItenStrike() {
  const liComp = document.querySelectorAll('.completed');
  for (let index = 0; index < liComp.length; index += 1) {
    liComp[index].remove();
  }
}
buttonFinish.addEventListener('click', clearItenStrike);

// 12 - Button Salva lista. Obs: Tive ajuda do Bruno Duarte.
const buttonSave = document.getElementById('salvar-tarefas');
clearMylist.innerHTML = localStorage.getItem('list');
function buttonSaved() {
  localStorage.setItem('list', clearMylist.innerHTML);
}
buttonSave.addEventListener('click', buttonSaved);

// 13 - Button Move para cima. Obs: Tive ajuda do Tales Coelho e Alexandre Santos.
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
buttonUp.addEventListener('click', () => {
  const classSelec = document.querySelector('.selected');
  if (classSelec && classSelec.previousElementSibling) {
    clearMylist.insertBefore(classSelec, classSelec.previousElementSibling);
  }
});

// 13 - Button Move para baixo. Obs: Tive ajuda do Tales Coelho e Alexandre Santos.
buttonDown.addEventListener('click', () => {
  const classSelec = document.querySelector('.selected');
  if (classSelec && classSelec.nextElementSibling) {
    clearMylist.insertBefore(classSelec.nextElementSibling, classSelec);
  }
});

// 14 - Button remove itens da lista selecionados pintados // Tive ajuda
const buttonClearSelected = document.getElementById('remover-selecionado');
function clearItenSelected() {
  const liCompSele = document.querySelectorAll('.selected');
  for (let index = 0; index < liCompSele.length; index += 1) {
    liCompSele[index].remove();
  }
}
buttonClearSelected.addEventListener('click', clearItenSelected);
