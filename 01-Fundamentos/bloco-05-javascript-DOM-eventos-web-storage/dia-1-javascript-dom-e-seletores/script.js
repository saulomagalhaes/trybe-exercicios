const cabecalho = document.getElementById('header-container')
cabecalho.style.backgroundColor = 'green'

const urgente = document.getElementsByClassName('emergency-tasks')
urgente[0].style.backgroundColor = 'pink'

const urgImport = document.querySelectorAll('.emergency-tasks h3')
for(let index = 0; index < urgImport.length; index += 1){
  urgImport[index].style.backgroundColor = 'rgb(165, 0, 243)'
}

const noUrgent = document.getElementsByClassName('no-emergency-tasks')
noUrgent[0].style.backgroundColor = '#f9db5e'

const noUrgImport = document.querySelectorAll('.no-emergency-tasks h3')
for(let index = 0; index < noUrgImport.length; index += 1){
  noUrgImport[index].style.backgroundColor= '#232525'
}

const rodape = document.getElementById('footer-container')
rodape.style.backgroundColor = '#003533'