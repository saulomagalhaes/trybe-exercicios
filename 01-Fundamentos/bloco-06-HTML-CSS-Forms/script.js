window.onload = function () {
  //CRIAÇÃO DAS OPÇÕES DO SELECT
  function setOptions() {
    const inptStates = document.getElementById('input-states');
    const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

    for (let i = 0; i < states.length; i += 1) {
      const option = document.createElement('option');
      option.value = states[i];
      option.innerText = states[i];
      inptStates.appendChild(option);
    }
  }
  setOptions()

  //VALIDACAO DA DATA
  const submitBtn = document.querySelector('.submit-btn');

  function validateData() {
    const date = document.querySelector('#date');
    const valueDate = date.value;
    const regex = /\d{2}\/\d{2}\/\d{4}$/
    if (regex.test(valueDate)) {
      const numbers = valueDate.split('/');
      const day = parseInt(numbers[0]);
      const month = parseInt(numbers[1]);
      const year = parseInt(numbers[2]);
      if (day < 0 || day > 31) {
        alert('Dia Inválido')
      }
      if (month < 0 || month > 12) {
        alert('Mês Inválido')
      }
      if (year < 1500 || year > 2022) {
        alert('Ano Inválido')
      }
    } else {
      alert('Formato da Data inválido')
    }
  }

  function defaultAll(event) {
    event.preventDefault();
    validateData();
  }
  submitBtn.addEventListener('click', defaultAll);

  //BOTAO LIMPAR
  const clean = document.querySelector('.clean-btn');
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');

  clean.addEventListener('click', function () {
    for (let i of inputs) {
      i.value = ''

    }
    textArea.value = ''
  })











}