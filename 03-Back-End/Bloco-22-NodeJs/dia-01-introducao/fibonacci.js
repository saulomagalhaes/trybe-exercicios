const fibonacci = (n) => {
  if (n < 1) return n;
  n1 = 0;
  n2 = 1;
  for (let i = 0; i < n; i++) {
    const soma = n1 + n2;
    console.log(soma);
    n1 = n2;
    n2 = soma;
  }
};

module.exports = fibonacci;