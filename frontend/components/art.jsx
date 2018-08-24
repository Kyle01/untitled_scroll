import React from 'react';
import Waypoint from 'react-waypoint';

import Mondrian from './mondrian';
import Rothko from './rothko';
import Villareal from './villareal';

import Cog from './cog';

//Other artist: Leo Villareal

class Art extends React.Component{

  constructor() {
    super();

    let currentItems = [];
    currentItems.push(<Rothko />);
    currentItems.push(<Rothko />);
    currentItems.push(<Rothko />);

    this.state = {items: currentItems};
  }

  loadMoreItems(){
    let currentItems = this.state.items;
    currentItems.push(<Rothko />);
    currentItems.push(<Rothko />);
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

  render () {
    return (
      <div>
        <Cog />
        { this.renderItems() }
        <Waypoint onEnter={() => {this.loadMoreItems()}} threshold={2.0} />
      </div>
    );

  }

}

export default Art;
