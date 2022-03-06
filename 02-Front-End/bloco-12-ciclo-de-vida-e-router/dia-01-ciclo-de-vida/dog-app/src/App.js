import React, { Component } from 'react';
import ImageDog from './components/ImageDog';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dogUrl: '',
      savedDogs: [],
    };
    this.fetchDogs = this.fetchDogs.bind(this);
  }

  async fetchDogs() {
    this.setState({ loading: true }, async () => {
      const requestReturn = await fetch(
        'https://dog.ceo/api/breeds/image/random'
      );
      const requestObject = await requestReturn.json();
      const dataUrlDog = requestObject.message;
      this.setState({
        dogUrl: dataUrlDog,
        loading: false,
      });
    });
  }

  componentDidMount() {
    this.fetchDogs();
  }

  savedDogs = () => {
    const { dogUrl } = this.state;
    this.setState(
      (prevstate) => ({
        savedDogs: [...prevstate.savedDogs, dogUrl],
      }),
      () => this.fetchDogs()
    );
  };

  render() {
    const { dogUrl, savedDogs, loading } = this.state;
    return (
      <>
        <div>
          {savedDogs.map((url, index) => (
            <img key={index} src={url} alt="cao" />
          ))}
        </div>
        <div>
          {loading ? (
            <p>{'Loading ...'}</p>
          ) : (
            <ImageDog urlDog={dogUrl} savedDogs={this.savedDogs} />
          )}
        </div>
      </>
    );
  }
}

export default App;
