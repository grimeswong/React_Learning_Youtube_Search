// import React from 'react';   Alternative syntax with below
import React, { Component } from "react";

// class SearchBar extends React.Component { // Create a class component, inherit the functionalities from the React.Component class
class SearchBar extends Component {
  // Create a class component, inherit the functionalities from the React.Component class
  //initialise class state (remember functional components don't have state)
  constructor(props) {
    super(props);
    this.state = { term: "" }; //innitialise state
  }
  render() {
    // class must declare with render() function
    return (
      <input onChange={event => this.setState({ term: event.target.value })} />
    ); // Must use curly braces
    // evnet name = { event handler }

    // return <input onChange = {event => console.log(event.target.value)} />  // simplified syntax
  }

  onInputChange(event) {
    //  Best practice: (handle, name of element, name of event), parameter(event object)
    // console.log(event.target.value);   //test the input field
    console.log(event);
  }
}

export default SearchBar; // export this component
