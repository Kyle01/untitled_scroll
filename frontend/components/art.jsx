import React from 'react';
import Waypoint from 'react-waypoint';

import Painting from './painting';

class Art extends React.Component{

  constructor() {
    super();

    let currentItems = [];
    currentItems.push(<Painting />);
    currentItems.push(<Painting />);
    currentItems.push(<Painting />);

    this.state = {items: currentItems, isLoading: false};
  }

  loadMoreItems(){
    let currentItems = this.state.items;
    currentItems.push(<Painting />);
    currentItems.push(<Painting />);
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
        { this.renderItems() }
        <Waypoint onEnter={() => {this.loadMoreItems()}} threshold={2.0} />
      </div>
    );

  }

}

export default Art;
