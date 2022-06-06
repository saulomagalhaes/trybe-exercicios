const imcCalc = require('./imc');
const avgSpeed = require('./avgSpeed');

const readline = require('readline-sync');

const weight = readline.questionFloat('Qual o seu peso? ');
const height = readline.questionFloat('Qual a sua altura? ');

console.log(imcCalc(weight, height));

const distance = readline.questionFloat('Qual a distância percorrida em metros?');
const time = readline.questionFloat('Quanto tempo em minutos?');

console.log(avgSpeed(distance, time));