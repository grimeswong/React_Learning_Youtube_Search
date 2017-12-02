// import React from 'react';   Alternative syntax with below
import React, { Component } from 'react';

// class SearchBar extends React.Component { // Create a class component, inherit the functionalities from the React.Component class
class SearchBar extends Component { // Create a class component, inherit the functionalities from the React.Component class
  render() {    // class must declare with render() function
    return <input onChange={this.onInputChange} />; // Must use curly braces
                // evnet name = { event handler }

    // return <input onChange = {event => console.log(event.target.value)} />  // simplified syntax
  }

  onInputChange(event) { //  Best practice: (handle, name of element, name of event), parameter(event object)
    // console.log(event.target.value);   //test the input field
    console.log(event);
  }
}

export default SearchBar;
