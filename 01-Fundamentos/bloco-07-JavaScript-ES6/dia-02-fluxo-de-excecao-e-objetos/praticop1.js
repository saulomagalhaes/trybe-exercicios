const sum = () => {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyValues(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;

  } catch (e) {
    document.getElementById('result').innerHTML = e.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
const verifyValues = (value1, value2) => {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Isso que você digitou não é um número!')
  }
  if (!value1 || !value2) {
    throw new Error('Você deixou algum campo vazio!');
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}