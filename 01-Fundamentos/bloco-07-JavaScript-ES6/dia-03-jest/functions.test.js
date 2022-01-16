const { sum, myRemove, myFizzBuzz, encode, decode } = require('./functions');

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

/* PARTE 4 */
describe('Para as funções encode e decode crie os seguintes testes em Jest:', () => {
  it('Teste se o encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Teste se o decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('ana')).toBe('1n1');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('ela')).toBe('2l1');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('ivo')).toBe('3v4');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('ovos')).toBe('4v4s');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('unha')).toBe('5nh1');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1n1')).toBe('ana');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('2l1')).toBe('ela');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('3v4')).toBe('ivo');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('4v4s')).toBe('ovos');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('5nh1')).toBe('unha');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('trybe').length).toBe('tryb2'.length);
  });
});
