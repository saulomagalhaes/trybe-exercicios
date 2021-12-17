//SELEÇÕES
const h1 = document.createElement('h1');
const main = document.createElement('main');
const section = document.createElement('section');
const p = document.createElement('p');
const sectionLeft = document.createElement('section');
const sectionRight = document.createElement('section');
const img = document.createElement('img');

//REQ.1
function createH1() {
  h1.innerText = 'Exercício 5.2 - JavaScript DOM';
  document.body.appendChild(h1);
}
createH1();

//REQ.2
function createMain() {
  main.classList.add('main-content');
  document.body.appendChild(main);
}
createMain();

//REQ.3
function createSection() {
  section.classList.add('center-content');
  main.appendChild(section);
}
createSection();

//REQ.4
function createP() {
  p.innerText = 'Saulo Alves Magalhães';
  section.appendChild(p);
}
createP()

//REQ.5
function createSectionLeft() {
  sectionLeft.classList.add('left-content');
  main.appendChild(sectionLeft);
}
createSectionLeft();

//REQ.6
function createSectionRight() {
  sectionRight.classList.add('right-content');
  main.appendChild(sectionRight);
}
createSectionRight();

//REQ.7
function createImage() {
  img.classList.add('small-image');
  img.src = 'https://picsum.photos/200';
  sectionLeft.appendChild(img);
}
createImage();

//REQ.8
