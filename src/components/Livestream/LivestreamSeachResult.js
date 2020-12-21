import React from 'react';

const LivestreamSearchResult = ({ pastStream }) => {
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
    <div className='livestream-search-result'>
      <h4 className='result-header'>
        {pastStream
          ? 'Past Streams By Jonn Doe @JohndoeD'
          : 'Your Search Results For Instadriver Livestream'}
      </h4>
      { playlist.map((music, index) => (
        <div key={index} className='row width-100 mt-3'>
          <div className='col-md-6'>
            <div className='card-player'>
              <video src={music.url} className="search-videos"></video>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='search-results-stats'>
              {pastStream ? (
                <span className='stream-ended'>
                  <span className='time'>3.45</span>One week ago
                </span>
              ) : (
                <span className='live-red'>LIVE</span>
              )}
              <span>
                <i className='fas fa-comment'></i>40
              </span>
              <span>
                <i className='fas fa-eye'></i>90
              </span>
            </div>
            <div className='search-result-info'>
              <h4>Accident at Mombasa Road</h4>
              <p>
                At Mombasa road, one drunk driver caused a serious road accident.
                Led to series of carnages.
              </p>
            </div>
            <div className='livestream-userprofile'>
              <img
                src='https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                alt='UserImage'
                className='livestream-userprofile-img'
              />
              <span className='user-at user-at-font'>John Doe</span>
              <span className='user-at  user-at-fade'>@JohntheD</span>
            </div>
          </div>
        </div>
      )) }
    </div>
  );
};

export default LivestreamSearchResult;
