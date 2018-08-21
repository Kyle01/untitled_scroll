import React from 'react';
import Waypoint from 'react-waypoint';

import Painting from './painting';

class Art extends React.Component{

  componentDidMount(){

  }

  getPaintings(){

  }

  shedPaintings(){

  }
  
  render () {
    return (
      <div>
        <Painting />
        <Painting />
        <Painting />
        <Waypoint onEnter={() => {console.log("entered")}}
                  onleave={() => {console.log("exit")}}/>
        <Painting / >
        <Painting / >
        <Painting / >
        <Painting / >
      </div>
    );
  }
}

export default Art;
