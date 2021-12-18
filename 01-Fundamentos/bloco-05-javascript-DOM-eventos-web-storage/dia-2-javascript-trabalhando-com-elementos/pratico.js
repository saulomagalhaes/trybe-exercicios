//SELEÇÕES
const h1 = document.createElement('h1');
const main = document.createElement('main');
const section = document.createElement('section');
const p = document.createElement('p');
const sectionLeft = document.createElement('section');
const sectionRight = document.createElement('section');
const img = document.createElement('img');
const ul = document.createElement('ul');

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
function createList() {
  let array = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  for (let i of array) {
    let createLi = document.createElement('li');
    createLi.innerText = i;
    ul.appendChild(createLi);
  }
  sectionRight.appendChild(ul)
}
createList();

//REQ.9
function createH3() {
  for (let i = 0; i < 3; i += 1) {
    const h3 = document.createElement('h3');
    main.appendChild(h3);
  }
}
createH3();

// PARTE2

//REQ.1
function createClassTitle() {
  h1.classList.add('title')
}
createClassTitle();

// REQ.2
function createClassH3() {
  const allH3 = document.getElementsByTagName('h3');
  for (let i of allH3) {
    i.classList.add('description');
  }
}
createClassH3();

//REQ.3
function removeSectionLeft() {
  main.removeChild(sectionLeft);
}
removeSectionLeft();

// REQ.4 --->> NO CSS

// REQ.5
function changeColorMain() {
  main.style.background = 'green';
}
changeColorMain();

//REQ.6
function removeItensUl() {
  let children = ul.children;
  ul.removeChild(children[9]);
  ul.removeChild(children[8]);
}
removeItensUl()