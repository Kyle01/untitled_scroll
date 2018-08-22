import React from 'react';

class Mondrian extends React.Component{

  componentDidMount(){
    this.updateCanvas();
  }

  updateCanvas(){
    let height = window.innerHeight;
    let width = window.innerWidth;
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(0,0, width/2-10, height/2-10);
    ctx.fillStyle = '#000000';
    ctx.fillRect(width/2-10, 0, 10, height);
    ctx.fillRect(0, height/2-10, width, 10);
    ctx.fillRect(0, height*.8-10,width, 10);
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(width/2, height*.8, width/2, height-height*.8);
  }


  render() {
    return (
      <canvas ref='canvas' width={window.innerWidth} height={window.innerHeight}/>
    );
  }
}

export default Mondrian;


//blue #0000ff
//yellow #ffff00
//red #ff0000
//white #ffffff
//black #000000
