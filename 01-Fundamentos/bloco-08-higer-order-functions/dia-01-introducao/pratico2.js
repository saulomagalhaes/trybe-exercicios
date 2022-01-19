const checked = (n, value) => (n === value ? 'Parabéns você ganhou!' : 'Tente novamente!');
const prizeDraw = (n, action) => {
  const drawn = Math.floor(Math.random() * 6);
  return action(n, drawn);
};

prizeDraw(5, checked);
