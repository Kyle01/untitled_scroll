import React from 'react';
import Waypoint from 'react-waypoint';

import Mondrian from './mondrian';
import Rothko from './rothko';
import Villareal from './villareal';

//Other artist: Leo Villareal
//Frank Stella

class Art extends React.Component{

  constructor() {
    super();

    this.state = {};
    this.displayProperty = 'none';
    this.displayAbout = 'none';

    let currentItems = [];
    currentItems.push(<Rothko />);
    currentItems.push(<Rothko />);
    currentItems.push(<Rothko />);
    this.state = {items: currentItems, artist: 'Rothko'};

    this.changeArtist = this.changeArtist.bind(this);
  }

  populateItems(painter){
    let currentItems = [];

    switch (painter) {
      case 'Rothko':
        currentItems.push(<Rothko />);
        currentItems.push(<Rothko />);
        currentItems.push(<Rothko />);
        break;
      case 'Mondrian':
        currentItems.push(<Mondrian />);
        currentItems.push(<Mondrian />);
        currentItems.push(<Mondrian />);
        break;
    }

    return currentItems;
  }

  componentDidMount() {
    document.querySelector('body').addEventListener('click', () => {
      const dropdown = document.getElementById('dropdown')
      dropdown.style.display = 'none';
      const about = document.getElementById('about')
      about.style.display = 'none';
    });
  }

  loadMoreItems(){
    let currentItems = this.state.items;

    switch (this.state.artist) {
      case 'Rothko':
        currentItems.push(<Rothko />);
        currentItems.push(<Rothko />);
        break;
      case 'Mondrian':
        currentItems.push(<Mondrian />);
        currentItems.push(<Mondrian />);
        break;

    }
    this.setState({
      items: currentItems,
    });
  }

  renderItems(){
    return this.state.items.map(function(item, index) {
      return (
        <div key={index}>{item}</div>
      );
    });
  }

  handleClick(){
    const dropdown = document.getElementById('dropdown')
    this.displayProperty = ('block' === this.displayProperty) ? 'none' : 'block'
    dropdown.style.display = this.displayProperty;
  }

  drawCog(){
    return (
      <div className='cog-main'>
        <img onClick={() => this.handleClick()} className='cog-image' src={'/Users/kylemcveigh/Documents/Coding_exercises/App_academy/js_project/assets/images/wheel.png'}/>
        <ul className='cog-list' id='dropdown'>
          <li onClick={() => this.handleAbout()}className='cog-list-el'>About</li>
          <li onClick={this.changeArtist.bind(this)} value="Mondrian" className='cog-list-el'>Mondrian</li>
          <li onClick={this.changeArtist} value="Rothko" className='cog-list-el'>Rothko</li>
        </ul>
        { this.drawAbout() }
      </div>
    );
  }

  handleAbout(){
    const about = document.getElementById('about')
    this.displayAbout = ('block' === this.displayAbout) ? 'none' : 'block'
    about.style.display = this.displayAbout;
  }

  drawAbout(){
    return (
      <div className='cog-about-main' id='about'>
        <p>About</p>
        <p>Kyle McVeigh made this</p>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Website</p>
      </div>
    )
  }

  changeArtist(e){
    e.preventDefault();
    this.setState({artist: e.target.innerText, items: this.populateItems(e.target.innerText)});
  }

  render () {
    return (
      <div>
        { this.drawCog() }
        { this.renderItems() }
        <Waypoint onEnter={() => {this.loadMoreItems()}} threshold={2.0} />
      </div>
    );

  }

}

export default Art;
