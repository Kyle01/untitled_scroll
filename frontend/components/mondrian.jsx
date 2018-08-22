import React from 'react';

class Mondrian extends React.Component{

  componentDidMount(){
    this.updateCanvas();
  }

  //This is my example canvas. Likely to never be used..
  updateCanvas(){
    this.drawVerticalLines();
    this.drawHorizontalLines();
    // let height = window.innerHeight;
    // let width = window.innerWidth;
    // const ctx = this.refs.canvas.getContext('2d');
    // ctx.fillStyle = '#0000ff';
    // ctx.fillRect(0,0, width/2-10, height/2-10);
    // ctx.fillStyle = '#000000';
    // ctx.fillRect(width/2-10, 0, 10, height);
    // ctx.fillRect(0, height/2-10, width, 10);
    // ctx.fillRect(0, height*.8-10,width, 10);
    // ctx.fillStyle = '#ff0000';
    // ctx.fillRect(width/2, height*.8, width/2, height-height*.8);
  }

  //
  drawVerticalLines(){
    const ctx = this.refs.canvas.getContext('2d');
    let height = window.innerHeight;
    let width = window.innerWidth;
    let probability = [1,1,1,1,1,1,2,2,2,3];
    let idx = Math.floor(Math.random() * probability.length);
    let num = probability[idx];
    let xStart = 0;
    ctx.fillStyle = '#000000';
    switch (num) {
      case 1:
        xStart = Math.floor(Math.random() * window.innerWidth-10);
        ctx.fillRect(xStart, 0, 10, height);
        break;
      case 2:
        let half = width/2 - 10;
        for(let k = 0; k < 2; k++){
          xStart = Math.floor(Math.random() * half);
          ctx.fillRect((k*half)+xStart, 0, 10, height);
        }
        break;
      case 3:
        let part = width/3 - 10;
        for(let k = 0; k < 3; k++){
          xStart = Math.floor(Math.random() * part);
          ctx.fillRect((k*part)+xStart, 0, 10, height);
        }
        break;
    }
  }

  drawHorizontalLines(){
    const ctx = this.refs.canvas.getContext('2d');
    let height = window.innerHeight;
    let width = window.innerWidth;
    let probability = [1,1,2,2,2,3,3,3,4,4];
    let idx = Math.floor(Math.random() * probability.length);
    let num = probability[idx];
    let yStart = 0;
    ctx.fillStyle = '#000000';
    switch (num) {
      case 1:
        yStart = Math.floor(Math.random() * height-10);
        ctx.fillRect(0, yStart, width, 10);
        break;
      case 2:
        let half = height/2 - 10;
        for(let k = 0; k < 2; k++){
          yStart = Math.floor(Math.random() * half);
          ctx.fillRect(0, (k*half)+yStart, width, 10);
        }
        break;
      case 3:
        let part = height/3 - 10;
        for(let k = 0; k < 3; k++){
          yStart = Math.floor(Math.random() * part);
          ctx.fillRect(0, (k*part)+yStart, width, 10);
        }
        break;
      case 4:
        part = height/4 - 10;
        for(let k = 0; k < 3; k++){
          yStart = Math.floor(Math.random() * part);
          ctx.fillRect(0, (k*part)+yStart, width, 10);
        }
        break;
    }
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
