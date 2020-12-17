import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
  const url = "https://www.youtube.com/watch?v=hlMaCC3MgBk"
  const styles = {
    borderRadius: '8px'
  }

  return (
    <ReactPlayer url={url} height={'100%'} width={'100%'} style={styles} config={{ youtube: { playerVars: { modestbranding: 1 } } }} />
  );
}

export default Player;