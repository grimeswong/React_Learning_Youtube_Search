import React from 'react';

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group"> {/* class is keyword of React, use className instead for avoiding confusion */}
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
