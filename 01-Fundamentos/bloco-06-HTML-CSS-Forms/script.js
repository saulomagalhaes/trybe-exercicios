const inptStates = document.getElementById('input-states');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

//CRIAÇÃO DAS OPÇÕES DO SELECT
for (let i = 0; i < states.length; i += 1) {
  const option = document.createElement('option');
  option.value = states[i];
  option.innerText = states[i];
  inptStates.appendChild(option);
}