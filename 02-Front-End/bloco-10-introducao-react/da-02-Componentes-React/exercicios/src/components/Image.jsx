import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.parameters.source} alt={this.props.parameters.alternativeText} />;
  }
}

export default Image;
