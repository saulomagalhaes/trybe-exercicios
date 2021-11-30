let nomeDaPeca = 'Rainha'
switch(nomeDaPeca.toLowerCase()){
  case 'bispo' :
    console.log('Bispo -> Diagonais')
    break;
  case 'peao' :
    console.log('Peao -> Frente')
    break;
  case 'rainha' :
    console.log('Rainha -> Frente, Trás, Diagonal,')
    break;
  default:
    console.log('Error')
}