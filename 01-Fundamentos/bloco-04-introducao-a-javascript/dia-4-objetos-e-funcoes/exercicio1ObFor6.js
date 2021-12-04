let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
let nomeESobrenome = leitor.nome +' '+ leitor.sobrenome
console.log(`O livro favorito de ${nomeESobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`)