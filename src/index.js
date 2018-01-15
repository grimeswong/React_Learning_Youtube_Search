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
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDxEceMxjg_EwI0Vhbk1FLEve_Rt97Ku9Y';



// Step1: Create a new Component. This component should produce some HTML
// const App = function() {     // ES5 Syntax
class App extends Component {             // ES6 Syntax ECMAScript2015 (ES2015)
  constructor(props) {
    super(props);
    this.state = { // empty object with empty array(a list of videos)
      videos: [],
      selectedVideo: null
    };

      // YTSearch({key: API_KEY, term: 'surfborads'}, (datas) => { // ES5
      // this.setState({ videos: datas });  //ES5
      YTSearch({key: API_KEY, term: 'surfborads'}, (videos) => { // function(data) = callback
      this.setState({ // ES6 (key name same with parameter)
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video= {this.state.selectedVideo}/>  {/* caution: variable name is 'video' singular */}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos= {this.state.videos}/>  {/* caution: variable name is 'videos' plural */}
      </div>
    );
  }
}

// Step2: Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // Make the instance of App (Not a class),
// document.querySelector(".example"); = Get the first element in the document with class="example"
