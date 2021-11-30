const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;
let soma = (angulo1 + angulo2 + angulo3);
let somaPositivos = (angulo1 > 0 && angulo2 > 0 && angulo3 > 0)

if (somaPositivos) {
  if (soma === 180) {
    console.log(true)
  } else {
    console.log(false)
  };
} else {
  console.log('Angulo Invalido')}