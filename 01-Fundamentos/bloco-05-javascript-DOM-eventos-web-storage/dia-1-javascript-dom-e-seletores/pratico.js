// REQ.1
function changeDescription() {
  const description = document.getElementsByTagName('p')[1];
  description.innerText = 'Me vejo um profissional que serve de exemplo e inspiração para outras pessoas';
}
changeDescription();

// REQ.2
function frameToGreen() {
  const yellowFrame = document.querySelector('.main-content');
  yellowFrame.style.background = 'rgb(76,164,109)';
}
frameToGreen();

// REQ.3
function frameToWhite() {
  const redFrame = document.querySelector('.center-content');
  redFrame.style.background = 'white'
}
frameToWhite();

// REQ.4
function h1Correction() {
  const h1Correct = document.querySelector('.title');
  h1Correct.innerText = 'Exercício 5.1 - JavaScript';
}
h1Correction();

// REQ.5
function capitalLetter() {
  const tagsP = document.querySelectorAll('p');
  for (let i of tagsP) {
    let textContent = i.innerText;
    i.innerText = textContent.toUpperCase()
  }
}
capitalLetter();

//REQ.6
function printConsole() {
  const tagsP = document.querySelectorAll('p');
  for (let i of tagsP) {
    let textContent = i.innerText;
    console.log(textContent);
  }
}
printConsole();