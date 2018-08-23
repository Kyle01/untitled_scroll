import React from 'react';

class Rothko extends React.Component{

  constructor(props){
     super(props);
   }

  componentDidMount(){
    this.updateCanvas();
  }

  updateCanvas(){
    this.drawBackground();
    this.drawCircle('#a24a32');
    console.log(this.averageColor('#a24a32', '#402d2e'));
  }

  getValues(){
    //gets colors pallet and determines if its gonna be a 2 or 3 design
  }

  drawBackground(){
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = '#402d2e'; //background
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight);
  }

  drawCircle(color){
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.shadowBlur= 1500;
    ctx.shadowColor=color;
    this.roundRect(ctx, 15, 10, 650, 500, 50, '#a24a32') //orange


  }

  hexToRgb(hex){
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
           ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
  }

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  averageColor(c1, c2){
    let color1 = this.hexToRgb(c1);
    let color2 = this.hexToRgb(c2);
    let red = (color1[0] + color2[0]) / 2;
    let green = (color1[1] + color2[1]) / 2;
    let blue = (color1[2] + color2[2]) / 2;
    return this.rgbToHex(red, green, blue);
  }

  roundRect(ctx, x, y, width, height, radius) {
    if (typeof radius === 'undefined') {
      radius = 25;
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    ctx.fill();
  }

  render() {
    return (
      <canvas ref='canvas' width={window.innerWidth} height={window.innerHeight}/>
    );
  }
}

export default Rothko;
