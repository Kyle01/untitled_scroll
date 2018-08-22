import React from 'react';
import Waypoint from 'react-waypoint';

import Painting from './painting';
import Mondrian from './mondrian';
import Cog from './cog';

class Art extends React.Component{

  constructor() {
    super();

    let currentItems = [];
    currentItems.push(<Mondrian />);
    currentItems.push(<Mondrian />);
    currentItems.push(<Mondrian />);

    this.state = {items: currentItems};
  }

  loadMoreItems(){
    let currentItems = this.state.items;
    currentItems.push(<Mondrian />);
    currentItems.push(<Mondrian />);
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
