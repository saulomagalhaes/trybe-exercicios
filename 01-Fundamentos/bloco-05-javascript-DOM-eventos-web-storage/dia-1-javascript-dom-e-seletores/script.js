// CABEÇALHO
const header = document.getElementById('header-container');
header.style.background = 'green'

// EMERGENCY TASKS
const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.background = 'pink'

const h3Emergency = document.querySelectorAll('.emergency-tasks h3');
for (let i of h3Emergency) {
  i.style.background = 'red'
}

// NO EMERGENCY TASKS
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.background = 'yellow'

const h3NoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let i of h3NoEmergency) {
  i.style.background = 'black'
}