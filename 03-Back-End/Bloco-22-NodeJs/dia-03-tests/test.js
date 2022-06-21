const fs = require('fs/promises');
const sinon = require('sinon');
const { expect } = require('chai');

const { checkNumber, writeText } = require('./checkNumber');

describe('Verificação do retorno da função checkNumber', () => {
  it('Deve retornar positivo se o parâmetro recebido for 5', () => {
    const response = checkNumber(5);

    expect(response).to.be.equal('Positivo');
  });
  it('Deve retornar negativo se o parâmetro recebido for -5', () => {
    const response = checkNumber(-5);

    expect(response).to.be.equal('Negativo');
  });
  it('Deve retornar neutro se o parâmetro recebido for 0', () => {
    const response = checkNumber(0);

    expect(response).to.be.equal('Neutro');
  });
  it('Deve retornar um erro se o parâmetro recebido for do tipo string', () => {
    const response = checkNumber('0');

    expect(response).to.be.equal('O valor deve ser um número');
  });
});

describe('Verificação do retorno da função writeText', () => {
  beforeEach(() => {
    sinon.stub(fs, 'writeFile');
  });

  afterEach(() => {
    fs.writeFile.restore();
  });

  it('Deve retornar ok caso os parametros sejam passados', async() => {
    const response = await writeText('teste.txt', 'Olá Saulo');

    expect(response).to.be.equal('ok');
  });

  it('Deve retornar erro caso algum parametro esteja vazio', async() => {
    const response = await writeText('', 'Olá Saulo');

    expect(response).to.be.equal('Insira todos os dados');
  });

});
