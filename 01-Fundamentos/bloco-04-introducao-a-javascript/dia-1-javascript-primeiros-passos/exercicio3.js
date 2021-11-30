const n1 = 10;
const n2 = 10;
const n3 = 10;
if(n1 > n2 && n1 > n3){
  console.log(`O número ${n1} é maior que o número ${n2} e maior que o número ${n3} `)
} else if(n2 > n1 && n2 > n3){
  console.log(`O número ${n2} é maior que o número ${n1} e maior que o número ${n3}`)
}else if(n3 > n1 && n3 > n2){
console.log(`O número ${n3} é maior que o número ${n1} e maior que o número ${n2}`)
} else {
  console.log('Os números são iguais')
}