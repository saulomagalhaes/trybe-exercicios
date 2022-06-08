// const fs = require('fs');
// const sinon = require('sinon');
const { expect } = require('chai');

const checkNumber = require('./checkNumber');

describe('Verificação do retorno da função', () => {
  it('Deve retornar positivo se o parâmetro recebido for 5', () => {
    const response = checkNumber(5);

    expect(response).to.be.equal('Positivo');

  })
  it('Deve retornar negativo se o parâmetro recebido for -5', () => {
    const response = checkNumber(-5);

    expect(response).to.be.equal('Negativo');
  })
  it('Deve retornar neutro se o parâmetro recebido for 0', () => {
    const response = checkNumber(0);

    expect(response).to.be.equal('Neutro');
  })
});
