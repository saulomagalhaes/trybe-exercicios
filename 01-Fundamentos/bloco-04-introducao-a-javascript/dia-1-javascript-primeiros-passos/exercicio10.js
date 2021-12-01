const custoUnitario = 550;
const valorDeVenda = 661;
if (custoUnitario >= 0 && valorDeVenda >= 0) {
  const valorCustoTotal = custoUnitario * 1.2
  const lucro = (valorDeVenda - valorCustoTotal) * 1000
  console.log(lucro)
} else {
  console.log('Error')
}