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


import React, { Component }from 'react';          // Old React Core
import ReactDOM from 'react-dom';   // New React that control DOM
import YTSearch from 'youtube-api-search';  // Youtube search API
import SearchBar from './components/search_bar'; // import the searchBar component that I made. note: path for the reference
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDxEceMxjg_EwI0Vhbk1FLEve_Rt97Ku9Y';



// Step1: Create a new Component. This component should produce some HTML
// const App = function() {     // ES5 Syntax
class App extends Component {             // ES6 Syntax ECMAScript2015 (ES2015)
  constructor(props) {
    super(props);
    this.state = { videos: [] };   // empty object with empty array(a list of videos)

    YTSearch({key: API_KEY, term: 'surfborads'}, (videos) => { // function(data) = callback
      // this.setState({ videos: videos }); simplified syntax for ES6 (key name same with parameter)
      this.setState( { videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos= {this.state.videos}/>
      </div>
    );
  }
}

// Step2: Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // Make the instance of App (Not a class),
// document.querySelector(".example"); = Get the first element in the document with class="example"
