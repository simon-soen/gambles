import React from 'react';
import YouTube from 'react-youtube';

const Video = ({ videoId }) => {
  const dummyVideoId = videoId || '30KqRUvegu4';

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={style.container}>
      <YouTube videoId={dummyVideoId} opts={opts} />
    </div>
  );
};
const style = {
  container: {
    position: 'relative',
    width: '100%',
  }

}

export default Video;
