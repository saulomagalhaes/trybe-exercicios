const { sum, myRemove } = require('./functions');

describe('Função de somar', () => {
  it('Teste se 4 + 5 = 9', () => {
    expect(9).toBe(sum(4, 5));
  });
  it('Teste se 0 + 0 = 0', () => {
    expect(0).toBe(sum(0, 0));
  });
  it('Teste se um erro é lançado quando strings são digitadas', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('Teste se a mensagem de erro é:parameters must be numbers', () => {
    expect(sum).toThrowError('parameters must be numbers');
  });
});

describe('Remover item de um array', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado ', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado ', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});
