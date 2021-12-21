function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//REQ.1
function createDays() {
  const ulDays = document.getElementById('days')
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i of dezDaysList) {
    const li = document.createElement('li');
    li.addEventListener('mouseover', mouseOver);
    li.addEventListener('mouseout', mouseOut);
    li.addEventListener('click', changeColorDays)
    li.classList.add('day');
    li.innerText = i;
    if (i === 24 || i === 25 || i === 31) {
      li.classList.add('holiday')
    }
    if (i === 4 || i === 11 || i === 18 || i === 25) {
      li.classList.add('friday')
    }
    ulDays.appendChild(li);
  }
}
createDays();

//REQ.2

const buttonHoliday = document.createElement('button');

function createHolidays() {
  const buttonsContainer = document.querySelector('.buttons-container');
  buttonHoliday.id = 'btn-holiday'
  buttonHoliday.innerText = 'Feriados'
  buttonsContainer.appendChild(buttonHoliday);
}
createHolidays();

//REQ.3
buttonHoliday.addEventListener('click', function () {
  const day = document.querySelectorAll('.day');
  for (let i of day) {
    if (i.classList.contains('holiday')) {
      if (i.style.background === 'white') {
        i.style.background = 'rgb(238,238,238)'
      } else {
        i.style.background = 'white'
      }
    }
  }
});

//REQ.4
const buttonFridays = document.createElement('button');

function createFridays() {
  const buttonsContainer = document.querySelector('.buttons-container');
  buttonFridays.id = 'btn-friday'
  buttonFridays.innerText = 'Sexta-Feira'
  buttonsContainer.appendChild(buttonFridays);
}
createFridays();

//REQ.5
const fridays = document.querySelectorAll('.friday');
let array = createArrayFridays()
buttonFridays.addEventListener('click', function () {
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerText !== 'SEXTOU') {
      fridays[i].innerText = 'SEXTOU'
    } else {
      fridays[i].innerText = array[i];
    }
  }
});

//REQ.5 AUXILIAR
function createArrayFridays() {
  const fridaysArray = [];
  for (let i of fridays) {
    fridaysArray.push(i.innerText);
  }
  return fridaysArray
}

//REQ.6
function mouseOver(event) {
  const eventClicked = event.target
  eventClicked.style.fontSize = '30px';
}

function mouseOut(event) {
  const eventClicked = event.target;
  eventClicked.style.fontSize = '20px';

}

//REQ.7 
function generateTasks(taskName) {
  const taskContainer = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.innerText = taskName
  taskContainer.appendChild(task);
}
generateTasks('Projeto: Calendário da Trybe');

//REQ.8 
function generateColorTask(taskColor) {
  const taskContainer = document.querySelector('.my-tasks');
  const task = document.createElement('div');
  task.addEventListener('click', selectedTask);

  task.classList.add('task');
  task.style.background = taskColor;
  taskContainer.appendChild(task);
}
generateColorTask('green');

//REQ.9 
function selectedTask(event) {
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('selected')
  }
}

//REQ.10 
function changeColorDays(event) {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected) {
    event.target.style.color = 'green'
  } else {
    event.target.style.color = 'rgb(119,119,119)'
  }
}

//REQ.11 

const btnAdd = document.getElementById('btn-add');
const commitment = document.getElementById('commitment')
const input = document.getElementById('task-input');

function addCommitment() {
  if (input.value !== '') {
    const createP = document.createElement('p');
    createP.innerText = input.value;
    createP.style.color = 'rgb(119,119,119)'
    commitment.appendChild(createP);
    input.value = ''
  } else {
    alert('Por favor digite algo')
  }
}

function checkEnter(event) {
  let key = event.key;
  if (key == 'Enter') {
    addCommitment()
  }
}
btnAdd.addEventListener('click', addCommitment);
input.addEventListener('keypress', checkEnter)