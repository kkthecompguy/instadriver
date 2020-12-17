import React from 'react';
import Player from './Player';

const LivestreamHome = () => {
  return (
    <div className='container'>
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
          <div className='form-group has-search'>
            <span className='fas fa-search form-control-feedback custom-color'></span>
            <input
              className=''
              placeholder='Search topics, drivers or location'
              type='text'
            />
          </div>
        </div>
      </div>

      <div className='row livestream-body'>
        <div className='col-sm-12 col-md-8 col-lg-8'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
              <div className='livestream-user-section'>
                <div className='livestream-user-info'>
                  <img
                    src='https://images.unsplash.com/photo-1608050803820-ff8aba70184a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                    alt='UserImage'
                    className='livestream-user-img'
                  />
                  <button className='livestream-user-btn'>
                    Arnold Johnson Lead
                  </button>
                </div>
                <div className='livestream-user-counts'>
                  <div className='row'>
                    <div className='col-md-6 flex-horizontal'>
                      <div className='flex-horizontal'>
                        <i className='fas fa-users'></i>{' '}
                        <span>Connections</span>
                      </div>
                      <span className='badge badge-pill badge-dark'>23</span>
                    </div>
                    <div className='col-md-6 flex-horizontal'>
                      <div className='flex-horizontal'>
                        <i className='fas fa-user-friends'></i>{' '}
                        <span>Following</span>
                      </div>
                      <span className='badge badge-pill badge-dark'>10</span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 flex-horizontal'>
                      <div className='flex-horizontal'>
                        <i className='fas fa-user-friends'></i>{' '}
                        <span>Followers</span>
                      </div>
                      <span className='badge badge-pill badge-secondary'>
                        23
                      </span>
                    </div>
                    <div className='col-md-6 flex-horizontal'>
                      <div className='flex-horizontal'>
                        <i className='fas fa-users'></i>{' '}
                        <span>Groups Joined</span>
                      </div>
                      <span className='badge badge-pill badge-secondary'>
                        10
                      </span>
                    </div>
                  </div>
                </div>
                <div className='more-past-stream'>
                  <a href='#!'>View Arnold's Past Streams</a>
                </div>
              </div>
              <div className='livestream-more-section'>
                <div className='row'>
                  <h4>More stream from Instadriver</h4>
                  <div className='col-sm-12 col-md-6 col-lg-6'>
                    <div className='more-first-video'>
                      <Player />
                      <div className="more-player-wrapper">
                        <span className="live-red">LIVE</span>
                        <span><i className="fas fa-eye"></i>90</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-6 col-lg-6'>
                    <div className='more-second-video'>
                      <Player />
                      <div className="more-player-wrapper">
                        <span className="live-red">LIVE</span>
                        <span><i className="fas fa-eye"></i>90</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
              <div className='livestream-player-section'>
                <div className="livestream-next-prev">
                  <div className="player-wrapper-one">
                    <a href="#!" className="previous-stream">Prev stream <i className="fas fa-arrow-circle-left"></i></a>
                    <a href="#!" className="next-stream">Next stream <i className="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                <Player />
                <div className="livestream-player-actions">
                    <div className="player-wrapper">
                    <span className="live-red">LIVE</span>
                    <span><i className="fas fa-comment"></i>40</span>
                    <span><i className="fas fa-eye"></i>90</span>
                    <span><i className="fas fa-volume-mute"></i></span>
                    <span><i className="fas fa-heart"></i></span>
                    <span><i className="fas fa-ellipsis-v"></i></span>
                  </div>
                </div>
                <div className="livestream-ellipse-popup">

                </div>
              </div>
              <div className="livestream-poster">
                <div className="poster-title">
                  <h4>Drivers Protest in Bombay</h4>
                  <span>Started streaming 30min ago</span>
                </div>
                <p>I attended the drivers protestation in Bombay. Very interesting events unfolding. Streaming it for the world to see the grievances of drivers. Enjoy Stream!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="livestream-message-area">
            <div className="livestream-message-inbox">
              <div className="livestream-message-single">
                <div className="livestream-userprofile">
                  <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" className="livestream-userprofile-img" alt="DriverImage"/>
                  <span className="user-at user-at-font">John Doe</span>
                  <span className="user-at  user-at-fade">@JohntheD</span>
                  <span className="user-at user-at-fade">5h</span>
                </div>
                <div className="livestream-user-message">
                  <p className="message-p">This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear mask as they drive for. lorem ipsum lorem</p>
                </div>
              </div>
              <div className="livestream-message-single">
                <div className="livestream-userprofile">
                  <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" className="livestream-userprofile-img" alt="DriverImage"/>
                  <span className="user-at user-at-font">John Doe</span>
                  <span className="user-at  user-at-fade">@JohntheD</span>
                  <span className="user-at user-at-fade">5h</span>
                </div>
                <div className="livestream-user-message">
                  <p className="message-gray">This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear mask as they drive for. lorem ipsum lorem</p>
                </div>
              </div>
              <div className="livestream-message-single">
                <div className="livestream-userprofile">
                  <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" className="livestream-userprofile-img" alt="DriverImage"/>
                  <span className="user-at user-at-font">John Doe</span>
                  <span className="user-at  user-at-fade">@JohntheD</span>
                  <span className="user-at user-at-fade">5h</span>
                </div>
                <div className="livestream-user-message">
                  <p className="message-p">This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear mask as they drive for. lorem ipsum lorem</p>
                </div>
              </div>
            </div>
            <div className="livestream-text-area">
              <div className="livestream-text-input">
                <div>
                  <input type="text" className="custom-input-live" placeholder="Type your comment"/>
                  <span><i className="far fa-grin-alt"></i></span>
                </div>
                <div className="livestream-send">
                  <span><i className="far fa-paper-plane"></i></span>
                  <span className="span-smaller">0/150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivestreamHome;
