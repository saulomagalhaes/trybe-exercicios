// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = Infinity;
for (let number of numbers) {
  if (number < menorNumero) {
    menorNumero = number
  } else {
    menorNumero = menorNumero
  }
}
console.log(menorNumero) 