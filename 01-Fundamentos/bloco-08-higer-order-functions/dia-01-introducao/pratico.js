const nameAndEmail = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  const complete = { fullName, email: `${email}@trybe.com` };
  return complete;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Saulo Alves'),
    id2: callback('Tuana Medeiros'),
    id3: callback('Rafael Moreci'),
  };
  return employees;
};

console.log(newEmployees(nameAndEmail));
