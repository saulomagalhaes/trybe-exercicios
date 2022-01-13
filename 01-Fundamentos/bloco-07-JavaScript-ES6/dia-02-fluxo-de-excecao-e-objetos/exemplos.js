/* PARTE 1 */

/* let object = {
  name: 'saulo'
}

const obj = (objeto, chave, valor) => objeto[chave] = valor;
console.log(obj(object, 'curso', 'trybe'))
console.log(object) */




/* PARTE 2 */

/* const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};


const listSkills = student => {
  const array = Object.keys(student);
  for (let i in array) {
    console.log(`${array[i]}---Nível:${student[array[i]]}`)
  }
}
listSkills(student1); */




/* PARTE 5 */

// const person = {
//   name:'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({},person,lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);