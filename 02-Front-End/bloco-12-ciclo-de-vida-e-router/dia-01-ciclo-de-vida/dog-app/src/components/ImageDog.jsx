import React, { Component } from 'react';
class ImageDog extends Component {
  render() { 
    const {urlDog, savedDogs}= this.props;
    return (
      <>
      <img src={urlDog} alt="Foto de cachorro" />
      <button type="button" onClick={savedDogs}> Salvar</button>
      </>
    );
  }
}
 
export default ImageDog;