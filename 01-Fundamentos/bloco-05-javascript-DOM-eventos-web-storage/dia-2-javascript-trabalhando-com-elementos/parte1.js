//REQ.1
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
//REQ.2
const pai = elementoOndeVoceEsta.parentElement;
pai.style.background = 'red'
//REQ.3
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Saulo';
//REQ.4
const primeiroFilho = pai.firstElementChild;
//REQ.5
const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
//REQ.6
const texto = elementoOndeVoceEsta.nextSibling;
//REQ.7
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
//REQ.8
const terceiroFilho = pai.children[2];
