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
  //after the function works the hasBeenClicked
  //then changes to 'true'

  handleClick = () => {
    this.setState({
        hasBeenClicked: true
    })
  };
  //after the button gets clicked it triggers this setState function
  //this function then uses the setState 
  //in order to SET the current state to true.

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
//we create a button that has a event listener (onClick)
//when that button gets triggered it then triggers the handleClick function

//the p tag line then checl the state and if it is null then 
//it will print our 'not' otherwise it will 
//print out that it was clicked

