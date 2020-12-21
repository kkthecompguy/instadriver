import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({
  playing,
  muted,
  width,
  height,
  pip,
  stopOnUnmount,
  moreUrl,
}) => {
  const playlist = [
    {
      id: new Date().getSeconds(),
      url:
        'https://player.vimeo.com/external/458870654.sd.mp4?s=916cda2ca52f2a77d377f13c2d05cd749c890190&profile_id=165&oauth2_token_id=57447761',
    },
    {
      id: new Date().getSeconds(),
      url:
        'https://player.vimeo.com/external/458885655.sd.mp4?s=429a8b79b990daea261bf6ef6ef8f85472e343cd&profile_id=165&oauth2_token_id=57447761',
    },
    {
      id: new Date().getSeconds(),
      url:
        'https://player.vimeo.com/external/428012688.sd.mp4?s=21be0a848f00a5210af73d738a773e9f4414ba4a&profile_id=165&oauth2_token_id=57447761',
    },
  ];
  let curStream = playlist[0].url;
  // let prevStream = playlist[1].url
  // let nextStream = playlist[2].url

  let url = moreUrl === undefined ? curStream : moreUrl;

  const styles = {
    borderRadius: '12px',
  };

  const config = {
    youtube: {
      playerVars: {
        modestbranding: 1,
        showinfo: 1,
      },
    },
  };

  const widthVar = width === undefined ? '100%' : '200px';
  const heightVar = height === undefined ? '100%' : '200px';

  return (
    <ReactPlayer
      url={url}
      height={heightVar}
      width={widthVar}
      playing={playing}
      style={styles}
      muted={muted}
      pip={pip}
      stopOnUnmount={stopOnUnmount}
      config={config}
    />
  );
};

export default Player;
