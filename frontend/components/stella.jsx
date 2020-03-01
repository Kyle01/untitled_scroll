import React from "react";

class Stella extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    this.drawSquare(ctx, 0, 0, window.innerWidth, window.innerHeight, [
      122,
      122,
      122
    ]);
  }

  drawSquare(ctx, x, y, xSize, ySize, currentColor) {
    if (xSize < 50 || ySize < 50) {
      return;
    }

    const color = this.getColor(currentColor);

    ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]})`;
    ctx.fillRect(x, y, xSize, ySize);

    const nextX = x + xSize * 0.1;
    const nextY = y + ySize * 0.1;

    this.drawSquare(ctx, nextX, nextY, xSize * 0.8, ySize * 0.8, color);
  }

  getColor(currentColor) {
    const newRed = this.modifyColor(currentColor[0]);
    const newGreen = this.modifyColor(currentColor[1]);
    const newBlue = this.modifyColor(currentColor[2]);

    return [newRed, newGreen, newBlue];
  }

  modifyColor(color) {
    if (Math.floor(Math.random() * 2) == 0) {
      const number = color + Math.random() * 100;
      if (number > 255) {
        return 255;
      } else if (number < 0) {
        return 0;
      }
      return number;
    } else {
      const number = color - Math.random() * 100;
      if (number > 255) {
        return 255;
      } else if (number < 0) {
        return 0;
      }
      return number;
    }
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
      />
    );
  }
}

export default Stella;
