let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'Sim'

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
};
info2['recorrente'] = 'Sim'

for(let keys in info){
  if(info[keys] !== info2[keys]){
    console.log(info[keys] + ' e ' + info2[keys])
  }else{
    console.log('Ambos recorrentes')
  }
}