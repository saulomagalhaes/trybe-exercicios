// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercicio6');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const erroEsperado = new Error('Não temos esse pokémon para você :(');

    function callback(error, msg) {
      expect(error).toEqual(erroEsperado);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Cachorro', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const mensagemEsperada =
      'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    function callback(error, msg) {
      expect(msg).toEqual(mensagemEsperada);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});
