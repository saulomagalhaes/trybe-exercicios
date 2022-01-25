//8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const greet = (name, saud = 'Hi') => `${saud} ${name}`;
// escreva greet abaixo

console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'
