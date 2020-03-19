import React from "react";
import Waypoint from "react-waypoint";

import Mondrian from "./mondrian";
import Rothko from "./rothko";
import Stella from "./Stella";
import Kusama from "./kusama";

//Other artist: Leo Villareal

class Art extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.displayProperty = "none";
    this.displayAbout = "none";

    let currentItems = [];
    currentItems.push(<Kusama />);
    currentItems.push(<Kusama />);
    currentItems.push(<Kusama />);
    this.state = { items: currentItems, artist: "Kusama" };

    this.changeArtist = this.changeArtist.bind(this);
  }

  populateItems(painter) {
    let currentItems = [];

    switch (painter) {
      case "Mondrian":
        currentItems.push(<Mondrian />);
        currentItems.push(<Mondrian />);
        currentItems.push(<Mondrian />);
        break;
      case "Rothko":
        currentItems.push(<Rothko />);
        currentItems.push(<Rothko />);
        currentItems.push(<Rothko />);
        break;
      case "Stella":
        currentItems.push(<Stella />);
        currentItems.push(<Stella />);
        currentItems.push(<Stella />);
        break;
      case "Kusama":
        currentItems.push(<Kusama />);
        currentItems.push(<Kusama />);
        currentItems.push(<Kusama />);
        break;
    }

    return currentItems;
  }

  componentDidMount() {
    document.querySelector("body").addEventListener("click", () => {
      const dropdown = document.getElementById("dropdown");
      dropdown.style.display = "none";
      const about = document.getElementById("about");
      about.style.display = "none";
    });
  }

  loadMoreItems() {
    let currentItems = this.state.items;

    switch (this.state.artist) {
      case "Kusama":
        currentItems.push(<Kusama />);
        currentItems.push(<Kusama />);
        break;
      case "Rothko":
        currentItems.push(<Rothko />);
        currentItems.push(<Rothko />);
        break;
      case "Mondrian":
        currentItems.push(<Mondrian />);
        currentItems.push(<Mondrian />);
        break;
      case "Stella":
        currentItems.push(<Stella />);
        currentItems.push(<Stella />);
        break;
    }
    this.setState({
      items: currentItems
    });
  }

  renderItems() {
    return this.state.items.map(function(item, index) {
      return <div key={index}>{item}</div>;
    });
  }

  handleClick() {
    const dropdown = document.getElementById("dropdown");
    this.displayProperty = "block" === this.displayProperty ? "none" : "block";
    dropdown.style.display = this.displayProperty;
  }

  drawCog() {
    return (
      <div className="cog-main">
        <img
          onClick={() => this.handleClick()}
          className="cog-image"
          src="assets/images/wheel.png"
        />
        <ul className="cog-list" id="dropdown">
          <li onClick={() => this.handleAbout()} className="cog-list-el">
            About
          </li>
          <li onClick={this.changeArtist} className="cog-list-el">
            Kusama
          </li>
          <li onClick={this.changeArtist} className="cog-list-el">
            Mondrian
          </li>
          <li onClick={this.changeArtist} className="cog-list-el">
            Rothko
          </li>
          <li onClick={this.changeArtist} className="cog-list-el">
            Stella
          </li>
        </ul>
        {this.drawAbout()}
      </div>
    );
  }

  handleAbout() {
    const about = document.getElementById("about");
    this.displayAbout = "block" === this.displayAbout ? "none" : "flex";
    about.style.display = this.displayAbout;
  }

  drawAbout() {
    return (
      <div className="about-container" id="about">
        <div className="cog-about-main">
          <p className="about-about">About</p>
          <p className="about-name">Created by Kyle McVeigh</p>
          <p className="about-year">2020 ©</p>
          <div className="about-img-container">
            <a href="https://github.com/Kyle01/">
              <img
                className="about-img"
                src="assets/images/github_mark.png"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/kyle-mcveigh/">
              <img
                className="about-img"
                src="assets/images/linkedin_mark.png"
              ></img>
            </a>
            <a href="http://www.kylemcveigh.com">
              <img
                className="about-img"
                src="assets/images/user_mark.png"
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  }

  changeArtist(e) {
    e.preventDefault();
    this.setState({
      artist: e.target.innerText,
      items: this.populateItems(e.target.innerText)
    });
  }

  render() {
    return (
      <div>
        {this.drawCog()}
        {this.renderItems()}
        <Waypoint
          onEnter={() => {
            this.loadMoreItems();
          }}
          threshold={2.0}
        />
      </div>
    );
  }
}

export default Art;
