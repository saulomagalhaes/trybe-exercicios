//  Descubra a quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];

for (let numero of numbers) {
  if (numero % 2 !== 0) {
    impares.push(numero)
  }
}
if (impares.length === 0) {
  console.log('Nenhum valor impar encontrado')
} else {
  console.log(impares.length)
} 