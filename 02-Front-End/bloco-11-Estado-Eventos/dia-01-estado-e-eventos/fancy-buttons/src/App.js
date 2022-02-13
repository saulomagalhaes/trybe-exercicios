import React from 'react';
import './App.css';

function Cliquei(e){
  return console.log(e.target.textContent)
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={Cliquei}>Cliquei 1</button>
        <button onClick={Cliquei}>Cliquei 2</button>
        <button onClick={Cliquei}>Cliquei 3</button>
      </div>
    )
  }
}

export default App;
