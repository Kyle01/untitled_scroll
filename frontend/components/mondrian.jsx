import React from 'react';

class Mondrian extends React.Component{

  constructor(props){
     super(props);

     this.xCoordinates = [0];
     this.yCoordinates = [0];
     this.squares = [];
   }

  componentDidMount(){
    this.updateCanvas();
  }

  //This is my example canvas. Likely to never be used..
  updateCanvas(){
    this.drawVerticalLines();
    this.drawHorizontalLines();
    this.determineSquares();
    this.paintSquares()
  }

  //
  drawVerticalLines(){
    const ctx = this.refs.canvas.getContext('2d');
    let temp = 0;
    let height = window.innerHeight;
    let width = window.innerWidth;
    let probability = [1,1,1,2,2,2,2,2,3,3];
    let idx = Math.floor(Math.random() * probability.length);
    let num = probability[idx];
    let xStart = 0;
    ctx.fillStyle = '#000000';
    switch (num) {
      case 1:
        xStart = Math.floor(Math.random() * window.innerWidth-10);
        ctx.fillRect(xStart, 0, 10, height);
        this.xCoordinates.push(xStart+10);
        break;
      case 2:
        let half = width/2 - 10;
        for(let k = 0; k < 2; k++){
          xStart = Math.floor(Math.random() * half);
          temp = (k*half)+xStart;
          ctx.fillRect(temp, 0, 10, height);
          this.xCoordinates.push(temp+10);
        }
        break;
      case 3:
        let part = width/3 - 10;
        for(let k = 0; k < 3; k++){
          xStart = Math.floor(Math.random() * part);
          temp = (k*part)+xStart;
          ctx.fillRect(temp, 0, 10, height);
          this.xCoordinates.push(temp+10);
        }
        break;
    }
  }

  drawHorizontalLines(){
    const ctx = this.refs.canvas.getContext('2d');
    let height = window.innerHeight;
    let width = window.innerWidth;
    let temp = 0;
    let probability = [1,1,2,2,2,3,3,3,4,4];
    let idx = Math.floor(Math.random() * probability.length);
    let num = probability[idx];
    let yStart = 0;
    ctx.fillStyle = '#000000';
    switch (num) {
      case 1:
        yStart = Math.floor(Math.random() * height-10);
        ctx.fillRect(0, yStart, width, 10);
        this.yCoordinates.push(yStart+10);
        break;
      case 2:
        let half = height/2 - 10;
        for(let k = 0; k < 2; k++){
          yStart = Math.floor(Math.random() * half);
          temp = (k*half)+yStart;
          ctx.fillRect(0, temp, width, 10);
          this.yCoordinates.push(temp+10);
        }
        break;
      case 3:
        let part = height/3 - 10;
        for(let k = 0; k < 3; k++){
          yStart = Math.floor(Math.random() * part);
          temp = (k*part)+yStart;
          ctx.fillRect(0, temp, width, 10);
          this.yCoordinates.push(temp + 10);
        }
        break;
      case 4:
        part = height/4 - 10;
        for(let k = 0; k < 3; k++){
          yStart = Math.floor(Math.random() * part);
          temp = (k*part)+yStart;
          ctx.fillRect(0, temp, width, 10);
          this.yCoordinates.push(temp + 10);
        }
        break;
    }
  }

  determineSquares(){
    let helper = [0, 0, 0, 0];
    for(let j = 0; j < this.xCoordinates.length; j++){
      for(let k = 0; k < this.yCoordinates.length; k++){
        helper[0] = this.xCoordinates[j];
        helper[1] = this.yCoordinates[k];
        j === this.xCoordinates.length-1 ? helper[2] = window.innerWidth - this.xCoordinates[j] : helper[2] = this.xCoordinates[j+1] - this.xCoordinates[j] - 10;
        k === this.yCoordinates.length-1 ? helper[3] = window.innerHeight - this.yCoordinates[k] : helper[3] = this.yCoordinates[k+1] - this.yCoordinates[k] - 10;
        this.squares.push(helper);
        helper = [0, 0, 0, 0]
      }
    }
  }

  paintSquares(){
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = '#0000ff';

    for(let k = 0; k < this.squares.length; k++){
      ctx.fillStyle = this.pickColor();
      ctx.fillRect(
        this.squares[k][0],
        this.squares[k][1],
        this.squares[k][2],
        this.squares[k][3]
      );
    }
  }

  pickColor(){
    let probability = [
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#0000ff',
      '#ffff00',
      '#ff0000'
    ];
    let idx = Math.floor(Math.random() * probability.length);
    return probability[idx];
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
