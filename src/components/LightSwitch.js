import React from 'react';

class LightSwitch extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }
  //we set the initial state to false


  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }
  //we passed in previousState (could be any name)
  //and we set the current state to that name
  // but we use the ! to represent the opposite so 'true'
  

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
//we then have a button that listens to a click using the
//onClick event listener that then triggers the function
//called handleCick, we used .this because the function is 
//inside the component that we are calling it from
export default LightSwitch;