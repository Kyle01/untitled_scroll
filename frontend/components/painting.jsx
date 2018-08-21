import React from 'react';

class Painting extends React.Component{

  doStyling(){
    return ({
      backgroundColor: 'yellow',
      height: '800px'
    });
  }

  createPainting(){
    return (
      <div style={this.doStyling()}>
        This will be the painting
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.createPainting() }
      </div>
    );
  }
}

export default Painting;

//window.innerHeight or window.innerWidth
