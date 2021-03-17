// Code ClickityClick Component Here
// src/components/ClickityClick.js
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }
  //we set the initial state of hasBeenClicked to false

  handleClick = () => {
    this.setState({
        hasBeenClicked: true
    })
  };
//this changes the hasBeenClicked to true 

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;