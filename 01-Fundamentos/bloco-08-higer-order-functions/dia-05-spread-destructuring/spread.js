// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Manga', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite', 'Azeite', 'Alface'];

const fruitSalad = (fruit, additional) => {
  let newArr = [...fruit, ...additional];
  return newArr;
};

console.log(fruitSalad(specialFruit, additionalItens));
