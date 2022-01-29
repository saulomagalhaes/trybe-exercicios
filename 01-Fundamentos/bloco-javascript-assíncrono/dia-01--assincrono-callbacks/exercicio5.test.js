const { uppercase } = require('./exercicio5');

it('Transforma em maiúsculo', (done) => {
  uppercase('saulo', (result) => {
    try {
      expect(result).toBe('SAULO');
      done();
    } catch (err) {
      done(err);
    }
  });
});
