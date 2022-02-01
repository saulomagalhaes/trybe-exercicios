// PRA RODAR O FETCH NO PROPRIO NODE, SE FOR RODAR NO NAVEGADOR NAO PRECISA
// const fetch = require('node-fetch');

const fetchCoins = async () => {
  try {
    const url = 'https://api.coincap.io/v2/assets'; /* URL DA API */
    const response = await fetch(url); /* PEGA TODOS OS DADOS DA API */
    const data = await response.json();/* RETORNA O JSON DOS DADOS O DATA */
    const arrayData = data.data;/* RETORNA O ARRAY COM TODAS AS CRIPTOS */
    return arrayData
  } catch (err) {
    return err.toString();
  }

};

const generateList = async () => {
  const coins = await fetchCoins();
  const ul = document.getElementById('coins-list');
  coins.filter((coin)=>Number(coin.rank) <=10)
  .forEach((coin) => {
    const li = document.createElement('li');
    const twoHouseCoins = Number(coin.priceUsd);
    li.innerText = `${coin.name} (${coin.symbol}): $${twoHouseCoins.toFixed(2)} Dólares`
    ul.appendChild(li);
  })
} 
generateList()