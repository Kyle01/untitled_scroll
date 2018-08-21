import React from 'react';
//look up canvas. It will be much better for drawing.
class Painting extends React.Component{

  doStyling(){
    return ({
      backgroundColor: 'yellow',
      height: '800px'
    });
  }

  createPainting(){
    let number = Math.floor((Math.random() * 10000));
    return (
      <div style={this.doStyling()}>
        This will be the painting - {number}
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
