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
      <div className="search-bar col-md-12">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search keywords"
        /> {/* setter for set state of a component} */}
      </div> // evnet name = { event handler } -> Must use curly brace
    );


    // return <input onChange = {event => console.log(event.target.value)} />  // simplified syntax
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar; // export this component
