import React from 'react';
// import Player from './Player';

const LivestreamMoreSection = () => {
  const playlist = [
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
  return (
    <div className='livestream-more-section'>
      <h4>More stream from Instadriver</h4>
      <div className='row'>
        {playlist.map((music, index) => (
          <div key={index} className='col-md-6 mx-auto'>
            <div className='card'>
              <video src={music.url} className="more-video" ></video>
              <div className='more-player-wrapper'>
                <span className='live-red'>LIVE</span>
                <span>
                  <i className='fas fa-eye'></i>90
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivestreamMoreSection;
