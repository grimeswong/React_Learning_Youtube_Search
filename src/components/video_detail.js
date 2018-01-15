import React from 'react';

/* functional component (ES5)
const VideoDetail = (props) => { // these three lines same as below ES6 syntax
  if (!props.video) {
    return <div>Loading...</div>
  }

const videoId = props.video.id.video.Id; //ES5
const url = 'https://www.youtube.com/embed/' + videoId; // ES5
*/

// functional component (ES6)
const VideoDetail = ({video}) => {
  if(!video) {
    console.log({video}); //debugger
    return <div>Loading...</div>;
  }


  const videoId = video.id.videoId; //ES6
  console.log('Has video'+ {videoId});  //debugger
  // const url = 'htts://www.youtube.com/embed/' + videoId; // ES5
  const url = `https://www.youtube.com/embed/${videoId}`; // ES6 syntax

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
