import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const {
    snippet: { thumbnails, title, channelTitle }
  } = video;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
