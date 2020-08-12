import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import searchYoutube from 'youtube-api-v3-search';  // Youtube search v3 API
import SearchBar from './components/search_bar'; // import the searchBar component that I made. note: path for the reference
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "";   // Put API KEY here 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('canon c'); //default value for search a video
  }

  /* function to search a video */
  videoSearch(term) {
    searchYoutube(API_KEY, {q:term, part: 'snippet', type:'video'})
    .then(videos => {
      this.setState({
        videos: videos.items,
        selectedVideo: videos.items[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); // change to execute this funciton every 3 seconds

    return (
      <div className="container">
        <h2 className="app-title">YouTube Video Search</h2>
        <div className="row upper-content">
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="row content-wrapper">
          <VideoDetail video= {this.state.selectedVideo}/>  {/* caution: variable name is 'video' singular */}
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos= {this.state.videos}/>  {/* caution: variable name is 'videos' plural */}
        </div>
      </div>
    );
  }
}

// Step2: Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // Make the instance of App (Not a class),
// document.querySelector(".example"); = Get the first element in the document with class="example"
