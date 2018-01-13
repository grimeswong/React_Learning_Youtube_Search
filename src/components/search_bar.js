/*** import React from 'react';   Alternative syntax with below ***/
import React, { Component } from "react";

// class SearchBar extends React.Component {  // Create a class component, inherit the functionalities from the React.Component class
class SearchBar extends Component { // Create a class component, inherit the functionalities from the React.Component class

  constructor(props) {
    super(props);

    this.state = { term: '' };  //initialise state ; //initialise class state (remember functional components don't have state)
  }

  render() {  // class must declare with render() function
    return (            // event is argument
      <div>
        <input
        value = {this.state.term}
        onChange={(event) => this.setState({ term: event.target.value })} /> // setter for set state of a component
        <h2>Value is: {this.state.term}</h2>
      </div> // evnet name = { event handler } -> Must use curly brace
    );


    // return <input onChange = {event => console.log(event.target.value)} />  // simplified syntax
  }

  onInputChange(event) {  // event is an object
    //  Best practice: (handle, name of element, name of event), parameter(event object)
    // console.log(event.target.value);   //test the input field
    console.log(event); // display the event's object
  }
}

export default SearchBar; // export this component
