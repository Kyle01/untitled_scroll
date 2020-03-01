# Welcome to Untitled Scroll

Untitled scroll is a web application that generates Modern art using predefined algorithms with an infinite scroll. The webpage currently generates Mondrain, Roth, and Stella inspired pieces.

![RothkoPiece](https://github.com/Kyle01/untitled_scroll/blob/master/assets/images/Screen%20Shot%202018-08-24%20at%2012.47.10%20PM.png)

## Inspiration

I'm a huge art fan

## Technologies

- Frontend:

  - The front end and UI are implemented using React and JavaScript.
  - The infinite scroll utilizes Waypoint, a Javascript library
  - The webpage designing was done using css
  - Images are Canvas HTML5 objects

- The site is hosted on Github can be viewed [here](www.untitledscroll.com)

## Features

- Artist

  - Mondrian piece is generated by randomly placed vertical lines, then horizontal lines, then determine the squares. The squares are mapped over and a color is randomly picked, with emephasis on white

  `{ this.drawVerticalLines(); this.drawHorizontalLines(); this.determineSquares(); this.paintSquares() }`

  ![portfolio_image](https://github.com/Kyle01/untitled_scroll/blob/master/assets/images/Screen%20Shot%202018-08-24%20at%2012.46.50%20PM.png)

  - Rothko piece is generated by randomly choosing from a set of predefined colors and randomly selected a predefined dimension.

  `{ let colors = this.getTwoColors(); let dx = this.getDimensionsTwo(); const ctx = this.refs.canvas.getContext('2d'); ctx.fillStyle = colors[0]; ctx.fillRect(0,0,window.innerWidth, window.innerHeight); this.drawCircle(colors[0], colors[1], dx[0][0], dx[0][1], dx[0][2], dx[0][3]); this.drawCircle(colors[0], colors[2], dx[1][0], dx[1][1], dx[1][2], dx[1][3]); }`

  - Stella piece was generated by starting drawing boxes of increasing smaller sizes using recursion and modifying the current color

* Dropdown
  - Users can select an artist using the settings button
  - Users can select about which leads to links to my github and other personal information
    ![settings_button](https://github.com/Kyle01/untitled_scroll/blob/master/assets/images/Screen%20Shot%202018-08-24%20at%2012.46.36%20PM.png)

## Current challenges and future implementations:

- Additional artist can be added to dropdown menu
  - Currently considering adding Leo Villareal
- Your suggestions and feedback are always welcome.
