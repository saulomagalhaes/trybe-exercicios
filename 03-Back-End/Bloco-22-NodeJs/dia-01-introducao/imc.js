const imcCalc = (weight, height) => {
  const imc = Number((weight / height ** 2).toFixed(2));

  if (imc < 18.5) {
    return `Seu IMC é ${imc} e você está abaixo do peso`;
  }

  if (imc >= 18.5 && imc < 25) {
    return `Seu IMC é ${imc} e você está no peso ideal`;
  }

  if (imc >= 25 && imc < 30) {
    return `Seu IMC é ${imc} e você se encontra na situação: Sobrepeso`;
  }

  if (imc >= 30 && imc < 35) {
    return `Seu IMC é ${imc} e você se encontra na situação: Obesidade grau I`;
  }

  if (imc >= 35 && imc < 40) {
    return `Seu IMC é ${imc} e você se encontra na situação: Obesidade grau II`;
  }

  if (imc >= 40) {
    return `Seu IMC é ${imc} e você se encontra na situação: Obesidade grau III`;
  }

  return 'Erro';
};


module.exports = imcCalc;

