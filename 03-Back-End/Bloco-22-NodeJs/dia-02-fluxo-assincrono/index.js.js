const sumAndMultiply = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof c !== 'number'
    ) {
      reject(new Error('Informe apenas números'));
    }

    const operation = (a + b) * c;
    if (operation < 50) {
      reject(new Error('Resultado menor que 50'));
    }

    resolve(operation);
  });
};

const n1 = Math.floor(Math.random() * 10 + 1);
const n2 = Math.floor(Math.random() * 10 + 1);
const n3 = Math.floor(Math.random() * 10 + 1);


sumAndMultiply(n1, n2, n3)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });

  
async function result() {
  try {
    const resultado = await sumAndMultiply(n1, n2, n3);
    console.log(resultado);
  } catch (err) {
    console.log(err);
  }
}
result();
