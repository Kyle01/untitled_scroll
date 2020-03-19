import React, { useEffect, useRef } from "react";

export default function Example() {
  const canvasRef = useRef(null);
  //Pick background color
  //pick a dot color
  //draw dots

  useEffect(() => {
    drawBackground("#ffffff");
    drawDots("ff00000");
  });

  const drawBackground = color => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  };

  const drawDots = color => {
    const ctx = canvasRef.current.getContext("2d");
    const knownCircles = [];
    ctx.fillStyle = color;

    const DENSITY_NUMBER = 0.04;
    const CIRCLE_RADIUS = 5;
    let attempts = 50000;

    const area = window.innerHeight * window.innerWidth;
    const numberOfCircle = Math.floor((area / (Math.PI * 5)) * DENSITY_NUMBER);
    for (let k = 0; k < numberOfCircle; k++) {
      const x = Math.floor(Math.random() * innerWidth - 10);
      const y = Math.floor(Math.random() * innerHeight - 10);
      let overLapping = false;
      for (let j = 0; j < knownCircles.length; j++) {
        const drawnX = knownCircles[j][0];
        const drawnY = knownCircles[j][1];
        if (
          x > drawnX - CIRCLE_RADIUS * 2 &&
          x < drawnX + CIRCLE_RADIUS * 2 &&
          y > drawnY - CIRCLE_RADIUS * 2 &&
          y < drawnY + CIRCLE_RADIUS * 2
        ) {
          overLapping = true;
          break;
        }
      }
      if (overLapping) {
        k -= 1;
        attempts -= 1;
        continue;
      }
      if (attempts < 0) {
        break;
      }
      ctx.beginPath();
      ctx.arc(x, y, CIRCLE_RADIUS, 0, 2 * Math.PI);
      ctx.stroke();
      knownCircles.push([x, y]);
    }
  };

  const backgroundColor = "000000";
  const dotColor = "ff0000";
  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
