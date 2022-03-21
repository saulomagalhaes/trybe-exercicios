import React, { Component } from 'react';
class ImageDog extends Component {
  render() { 
    const {urlDog}= this.props;
    return (
      <>
      <img src={urlDog} alt="Foto de cachorro" />
      </>
    );
  }
}
 
export default ImageDog;