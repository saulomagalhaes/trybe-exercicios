const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

const myRemove = (arr, item) => {
  const newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

// eslint-disable-next-line complexity
const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};

const encode = (string) => {
  const array = string.split('');
  let novaArray = '';
  for (let letra of array) {
    switch (letra) {
      case 'a':
        novaArray += '1';
        break;
      case 'e':
        novaArray += '2';
        break;
      case 'i':
        novaArray += '3';
        break;
      case 'o':
        novaArray += '4';
        break;
      case 'u':
        novaArray += '5';
        break;
      case ' ':
        novaArray += '';
      default:
        novaArray += letra;
    }
  }
  return novaArray;
};

const decode = (string) => {
  const array = string.split('');
  let novaArray = '';
  for (let numero of array) {
    switch (numero) {
      case '1':
        novaArray += 'a';
        break;
      case '2':
        novaArray += 'e';
        break;
      case '3':
        novaArray += 'i';
        break;
      case '4':
        novaArray += 'o';
        break;
      case '5':
        novaArray += 'u';
        break;
      case ' ':
        novaArray += '';
      default:
        novaArray += numero;
    }
  }
  return novaArray;
};

const techList = (array, name) => {
  if (array.length !== 0) {
    const newArray = array.sort();
    let object = [];
    for (let index = 0; index < newArray.length; index += 1) {
      let newObj = {};
      newObj['tech'] = newArray[index];
      newObj['name'] = name;
      object.push(newObj);
    }
    return object;
  } else {
    return 'Vazio!';
  }
};

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList };
