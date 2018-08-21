import React from 'react';
//look up canvas. It will be much better for drawing.
class Mondrian extends React.Component{

  componentDidMount(){
    this.updateCanvas();
  }

  updateCanvas(){
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0, 100, 100);
  }


  render() {
    return (
      <canvas ref='canvas' width={window.innerWidth} heigth={window.innerHeight}/>
    );
  }
}

export default Mondrian;

//window.innerHeight or window.innerWidth
