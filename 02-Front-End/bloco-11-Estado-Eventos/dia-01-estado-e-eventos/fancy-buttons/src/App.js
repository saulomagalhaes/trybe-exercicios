import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    /* Sobrescreve o constructor interno */
    super(); /* Garante que isso vai ser feito depois que o interno do react for executado para que a sua sobrescreva*/
    this.CliqueiOne =
      this.CliqueiOne.bind(
        this
      ); /* Estou pedindo para vincular a funcao Cliquei com  o this do APP, ou seja quando chamar o this dentro do cliquei ele puxa o objeto do pai APP */
    this.CliqueiTwo = this.CliqueiTwo.bind(this);
    this.CliqueiThree = this.CliqueiThree.bind(this);
    this.state = {
      clique1: 0,
      clique2: 0,
      clique3: 0,
    };
  }

  CliqueiOne() {
    this.setState(
      ({ clique1 }) => ({
        clique1: clique1 + 1,
      }),
      () => {
        console.log(`Botão 1 ${this.checkColor(this.state.clique1)}`);
      }
    );
  }
  CliqueiTwo() {
    this.setState(
      ({ clique2 }) => ({
        clique2: clique2 + 1,
      }),
      () => {
        console.log(`Botão 1 ${this.checkColor(this.state.clique1)}`);
      }
    );
  }
  CliqueiThree() {
    this.setState(
      ({ clique3 }) => ({
        clique3: clique3 + 1,
      }),
      () => {
        console.log(`Botão 1 ${this.checkColor(this.state.clique1)}`);
      }
    );
  }

  checkColor = (num) => {
    return num % 2 === 0 ? 'green' : 'red';
  };

  render() {
    const { clique1, clique2, clique3 } = this.state;
    return (
      <div>
        <button
          onClick={this.CliqueiOne}
          style={{ backgroundColor: this.checkColor(clique1) }}
        >
          Botão 1 = {this.state.clique1}
        </button>
        <button
          onClick={this.CliqueiTwo}
          style={{ backgroundColor: this.checkColor(clique2) }}
        >
          Botão 2 = {this.state.clique2}
        </button>
        <button
          onClick={this.CliqueiThree}
          style={{ backgroundColor: this.checkColor(clique3) }}
        >
          Botão 3 = {this.state.clique3}
        </button>
      </div>
    );
  }
}

export default App;
