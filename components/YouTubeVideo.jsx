import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ id, height, width }) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0,
      origin: 'http://localhost:3000',
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div>
      <YouTube videoId={id} opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubeVideo;
