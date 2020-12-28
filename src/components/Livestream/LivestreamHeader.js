import React from 'react';
import LivestreamSearch from './LivestreamSearch';

const LivestreamHeader = ({ getSearchInput, hash }) => {  
  const videoChatActive = hash === '#/video-chat' ? 'custom-active' : '';
  const videoChatHover = hash === '#/video-chat' ? 'custom-hover' : '';
  const videoChatBold = hash === '#/video-chat' ? 'custom-bold' : '';
  const livestreamActive = hash === '#/' ? 'custom-active' : '';
  const livestreamHover = hash === '#/' ? 'custom-hover' : '';
  const livestreamBold = hash === '#/' ? 'custom-bold' : '';
  return (
    <div className='row livestream-header'>
      <div className='col-sm-12 col-md-8 col-lg-8 livestream-section1'>
        <div>
          <a href='#!'>
            <i className='fas fa-paste'></i>
            <span>All Content</span>
          </a>
        </div>
        <div>
          <a href='#!'>
            <i className='fas fa-users'></i>
            <span>Instadriver Groups</span>
          </a>
        </div>
        <div>
          <a href='#!' className={videoChatHover}>
            <i className={'fas fa-video '+videoChatActive}></i>
            <span className={videoChatBold}>Video Chat</span>
          </a>
        </div>
        <div>
          <a href='#!' className={livestreamHover}>
            <i className={'fas fa-video '+livestreamActive}></i>
            <span className={livestreamBold}>Livestream</span>
          </a>
        </div>
        <div>
          <a href='#!'>
            <i className='fas fa-gamepad'></i>
            <span>Gaming</span>
          </a>
        </div>
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <LivestreamSearch getSearchInput={getSearchInput} />
      </div>
    </div>
  );
};

export default LivestreamHeader;
