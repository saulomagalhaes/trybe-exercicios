import React from 'react';
import './App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
/* Fixação */
// import Component from './Component.js'
/* Exercicio 2 */
// const Task = (value) => {
//   return value.map((item) => <li>{item}</li>);
// };
function App() {
  /* Exercicio 2 */
  // const list = Task(['Estudar', 'Trabalhar', 'Descansar']);
  // return (
  //   <div>
  //     <ol> {list} </ol>
  //   </div>
  // );
  /* Exercicio 3 */
  return(
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
