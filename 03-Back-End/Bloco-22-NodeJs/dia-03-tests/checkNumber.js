const fs = require('fs/promises');

const checkNumber = (number) => {
  if (typeof number === 'string') return 'O valor deve ser um número';

  if (number === 0) {
    return 'Neutro';
  }
  if (number > 0) {
    return 'Positivo';
  }
  if (number < 0) {
    return 'Negativo';
  }
};

const writeText = async (name, content) => {
  if(name === '' || content === '') return 'Insira todos os dados';
  await fs.writeFile(name, content);
  return 'ok'
};

module.exports = { checkNumber, writeText };
