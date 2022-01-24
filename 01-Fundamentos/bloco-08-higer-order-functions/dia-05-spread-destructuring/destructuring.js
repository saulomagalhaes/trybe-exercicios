const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brasileira',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const newArr = {...user, ...jobInfos};

const phrase = ({name, age, nationality, profession, squad, squadInitials}) => {
  return ` Oi, meu nome é ${name}, eu tenho ${age} anos de idade e eu sou ${nationality}. Eu trabalho de ${profession} e meu squad é ${squadInitials}-${squad}`
}

console.log(phrase(newArr));

// const userAndJob = (name, job) => {
//   let arr = {...name, ...job};
//   return arr;
// };
// console.log(userAndJob(user, jobInfos))