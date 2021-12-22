window.onload = function () {
  //SELEÇÕES
  const backgroundColor = document.getElementById('backgroundColor');
  const fontColor = document.getElementById('fontColor');
  const fontSize = document.getElementById('fontSize');
  const lineHeight = document.getElementById('lineHeight');
  const fontFamily = document.getElementById('fontFamily');

  //COR DE FUNDO DA PÁGINA
  backgroundColor.addEventListener('change', function () {
    document.body.style.background = backgroundColor.selectedOptions[0].value;
    localStorage.setItem('backgroundColor', backgroundColor.selectedOptions[0].value);
  })
  //COR DA FONTE DA PÁGINA
  fontColor.addEventListener('change', function () {
    document.body.style.color = fontColor.selectedOptions[0].value;
    localStorage.setItem('fontColor', fontColor.selectedOptions[0].value);
  })
  //TAMANHO DA FONTE
  fontSize.addEventListener('change', function () {
    document.body.style.fontSize = fontSize.selectedOptions[0].value;
    localStorage.setItem('fontSize', fontSize.selectedOptions[0].value);
  })
  //ESPAÇAMENTO ENTRE LINHAS
  lineHeight.addEventListener('change', function () {
    document.body.style.lineHeight = lineHeight.selectedOptions[0].value;
    localStorage.setItem('lineHeight', lineHeight.selectedOptions[0].value);
  })
  //FAMILIA DA FONTE
  fontFamily.addEventListener('change', function () {
    document.body.style.fontFamily = fontFamily.selectedOptions[0].value;
    localStorage.setItem('fontFamily', fontFamily.selectedOptions[0].value);
  })


  //LOCALSTORAGE
  let saveBackground = localStorage.getItem('backgroundColor');
  document.body.style.background = saveBackground;
  let saveFontColor = localStorage.getItem('fontColor');
  document.body.style.color = saveFontColor;
  let saveFontSize = localStorage.getItem('fontSize');
  document.body.style.fontSize = saveFontSize;
  let saveLineHeight = localStorage.getItem('lineHeight');
  document.body.style.lineHeight = saveLineHeight;
  let saveFontFamily = localStorage.getItem('fontFamily');
  document.body.style.fontFamily = saveFontFamily;


}