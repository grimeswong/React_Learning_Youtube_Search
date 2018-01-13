// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));



/*** Grimes ***/

const API_KEY = 'AIzaSyDxEceMxjg_EwI0Vhbk1FLEve_Rt97Ku9Y';

import React from 'react';          // Old React Core
import ReactDOM from 'react-dom';   // New React that control DOM

import SearchBar from './components/search_bar'; // import the searchBar component that I made. note: path for the reference


// Step1: Create a new Component. This component should produce some HTML
// const App = function() {     // ES5 Syntax
const App = () => {             // ES6 Syntax ECMAScript2015 (ES2015)
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Step2: Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // Make the instance of App (Not a class),
// document.querySelector(".example"); = Get the first element in the document with class="example"
