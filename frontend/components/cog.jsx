import React from 'react';
//look up canvas. It will be much better for drawing.
class Cog extends React.Component{

  render() {
    let styles = {
      position: 'fixed'
    };

    return (
      <div style={styles} className='cog-main'>
        <img  className='cog-image' src={'/Users/kylemcveigh/Documents/Coding_exercises/App_academy/js_project/assets/images/wheel.png'}/>
      </div>
    );
  }
}

export default Cog;

//window.innerHeight or window.innerWidth
