const fetch = require('node-fetch');

const url = 'https://api.chucknorris.io/jokes/random?category=dev';
const fetchJoke = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.