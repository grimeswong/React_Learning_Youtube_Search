import React from 'react';

// const VideoListItem = (props) => {  // this line can be reduced by ES6 as below
//   const video = props.video;        // this line can be reduced by ES6 as below
  const VideoListItem = ({video}) => {  // ES6 syntax
  console.log(video); // tester

  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
