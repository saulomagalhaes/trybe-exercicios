const acordando = () => 'Acordando!!'
const cafe = () => 'Bora tomar café!!!'
const dormir = () => 'Partiu dormir!!'

const doingThings = (action) => action();

console.log(doingThings(acordando));