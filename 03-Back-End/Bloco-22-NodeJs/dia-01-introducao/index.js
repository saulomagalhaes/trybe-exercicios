const imcCalc = require('./imc');
const readline = require('readline-sync');

const weight = readline.questionFloat('Qual o seu peso? ');
const height = readline.questionFloat('Qual a sua altura? ');

console.log(imcCalc(weight, height));