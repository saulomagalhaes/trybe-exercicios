const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

//REQ.2 AND 3
function createClassTech(event) {
  const tech = document.querySelector('.tech');
  tech.classList.remove('tech')
  event.target.classList.add('tech')
  const valueInput = input.value
  if (valueInput === '') {
    alert('Por favor digite algo');
  } else {
    event.target.innerText = input.value
  }
  input.value = ''
}

//REQ.4
myWebpage.addEventListener('dblclick', function () {
  window.location.replace('https://www.globo.com');
});

//REQ.5
myWebpage.addEventListener('mouseover', function () {
  myWebpage.style.color = 'green';
});
myWebpage.addEventListener('mouseout', function () {
  myWebpage.style.color = 'white';
});

firstLi.addEventListener('click', createClassTech);
secondLi.addEventListener('click', createClassTech);
thirdLi.addEventListener('click', createClassTech);