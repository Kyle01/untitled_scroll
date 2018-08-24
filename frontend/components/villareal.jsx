import React from 'react';

class Villareal extends React.Component{

  constructor(props){
     super(props);
   }

  componentDidMount(){
    this.updateCanvas();
  }

  updateCanvas(){
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight);
  }

  render() {
    return (
      <canvas ref='canvas' width={window.innerWidth} height={window.innerHeight}/>
    );
  }
}

export default Villareal;
