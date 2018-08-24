import React from 'react';

class Rothko extends React.Component{

  constructor(props){
     super(props);
   }

  componentDidMount(){
    this.updateCanvas();
  }

  updateCanvas(){
    this.drawTwo();
  }

  //randomly picks order for second colors
  getTwoColors(){
    let pick = Math.floor(Math.random() * 9);
    let order = Math.floor(Math.random() * 2);

    let colors = [
      ['#563632', '#d5652f', '#232549'],
      ['#c15033', '#1c140c', '#8f2313'],
      ['#ebaeab', '#f4bd59', '#c52f2e'],
      ['#cd8859', '#c34629', '#171410'],
      ['#c47a38', '#c16d48', '#e6d963'],
      ['#324068', '#222b27', '#32464c'],
      ['#ea9463', '#695f5b', '#d36fa4'],
      ['#a87967', '#ad814d', '#326495'],
      ['#be554c', '#822016', '#f7ccd1'],
      ['#4a95b5', '#a5b1c4', '#3a6db1'],
    ];
    let answer = [];
    switch (order) {
      case 0:
        answer[0] = colors[pick][0]
        answer[1] = colors[pick][1]
        answer[2] = colors[pick][2]
        return answer;
      case 1:
        answer[0] = colors[pick][0]
        answer[1] = colors[pick][2]
        answer[2] = colors[pick][1]
        return answer;
    }
  }

  //returns [[x y width height][x y width height]]
  getDimensionsTwo(){
    let width = window.innerWidth-30;
    let height = window.innerHeight-40;
    let choices = [
      [[15, 15, width, height*.3], [15, height*.3+20, width, height*.7]],
      [[15, 15, width, height*.4], [15, height*.4+20, width, height*.6]],
      [[15, 15, width, height*.5], [15, height*.5+20, width, height*.5]],
      [[15, 15, width, height*.6], [15, height*.6+20, width, height*.4]],
      [[15, 15, width, height*.7], [15, height*.7+20, width, height*.3]],
    ]
    let idx = Math.floor(Math.random() * 4)
    return choices[idx];
  }

  drawTwo(){
    let colors = this.getTwoColors();
    let dx = this.getDimensionsTwo();
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = colors[0];
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight);
    this.drawCircle(colors[0], colors[1], dx[0][0], dx[0][1], dx[0][2], dx[0][3]);
    this.drawCircle(colors[0], colors[2], dx[1][0], dx[1][1], dx[1][2], dx[1][3]);
  }
  
  drawCircle(backgroundColor, color, x, y, width, height){
    const ctx = this.refs.canvas.getContext('2d');
    let firstColor = this.averageColor(backgroundColor, color);
    ctx.shadowBlur= 1500;
    ctx.shadowColor = firstColor;
    ctx.fillStyle = firstColor;
    this.roundRect(ctx, x, y, width, height, 50, firstColor);
    let secondColor = this.averageColor(firstColor,color);
    ctx.shadowColor = secondColor;
    ctx.fillStyle = secondColor;
    this.roundRect(ctx, x+10, y+20, width-25, height-25, 50, secondColor)
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    this.roundRect(ctx, x+20, y+20, width-25, height-25, 50, color)
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
