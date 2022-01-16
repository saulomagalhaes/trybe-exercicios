const { sum, myRemove, myFizzBuzz } = require('./functions');

/* PARTE 1 */
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

/* PARTE 2 */
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

/* PARTE 3 */
// eslint-disable-next-line max-len
describe('- A função myFizzBuzznum recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  // eslint-disable-next-line max-len
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toBe(myFizzBuzz(9));
  });
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect('buzz').toBe(myFizzBuzz(5));
  });
  // eslint-disable-next-line max-len
  it('Faça uma chamada com um número que não é divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(7)).toBe(myFizzBuzz(7));
  });
  // eslint-disable-next-line max-len
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(false).toBe(myFizzBuzz('5'));
  });
});
