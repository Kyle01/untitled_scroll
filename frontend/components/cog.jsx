import React from 'react';

class Cog extends React.Component{

  constructor(){
    super();

    this.displayProperty = 'none';
  }

  componentDidMount() {
    document.querySelector('body').addEventListener('click', () => {
      const dropdown = document.getElementById('dropdown')
      dropdown.style.display = 'none';
    });
  }

  handleClick(){
    const dropdown = document.getElementById('dropdown')
    this.displayProperty = ('block' === this.displayProperty) ? 'none' : 'block'
    dropdown.style.display = this.displayProperty;
  }

  render() {

    return (
      <div className='cog-main'>
        <img onClick={() => this.handleClick()} className='cog-image' src={'/Users/kylemcveigh/Documents/Coding_exercises/App_academy/js_project/assets/images/wheel.png'}/>
        <ul className='cog-list' id='dropdown'>
          <li className='cog-list-el'>About</li>
          <li className='cog-list-el'>Mondrian</li>
          <li className='cog-list-el'>Rothko</li>
        </ul>
      </div>
    );
  }
}

export default Cog;

//event stopPropagation()
