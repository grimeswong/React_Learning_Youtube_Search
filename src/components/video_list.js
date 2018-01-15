import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems  = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect= {props.onVideoSelect}
        key={video.etag} /* always added a key for each item */
        video={video} />
    );
  })

  return (
    <ul className="col-md-4 list-group"> {/* class is keyword of React, use className instead for avoiding confusion */}
      {videoItems}
    </ul>
  );
};

export default VideoList;
