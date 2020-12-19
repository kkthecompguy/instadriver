import React from 'react';
import LivestreamSearch from './LivestreamSearch';

const LivestreamHeader = ({ getSearchInput }) => {
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
          <a href='#!'>
            <i className='fas fa-video'></i>
            <span>Video Chat</span>
          </a>
        </div>
        <div>
          <a href='#!' className='custom-hover'>
            <i className='fas fa-video custom-active'></i>
            <span className='custom-bold'>Livestream</span>
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
