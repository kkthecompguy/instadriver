import React, { useState } from 'react';
import Player from './Player';
import EllipsePopUp from './EllipsePopUp';

const LivestreamMainPlayer = ({
  toggleChatDiv,
  showChat,
  toggleSereneMode,
  sereneMode,
  goBack,
  search,
  pastStream,
}) => {
  const [showEllipseDiv, setShowEllipseDiv] = useState(false);
  const [streamEnded, setStreamEnded] = useState(false);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);

  return (
    <React.Fragment>
      <div className='livestream-player-section'>
        <div className='livestream-next-prev'>
          <div className='player-wrapper-one'>
            <a href='#!' className='previous-stream'>
              Prev stream <i className='fas fa-arrow-circle-left'></i>
            </a>
            <a href='#!' className='next-stream'>
              Next stream <i className='fas fa-arrow-circle-right'></i>
            </a>
          </div>
        </div>
        <Player
          playing={!streamEnded || !paused ? true : false}
          muted={muted}
          pip={true}
          stopOnUnmount={false}
        />
        <div className='livestream-player-actions'>
          <div className='player-wrapper'>
            {streamEnded ? (
              <span onClick={() => setPaused(!paused)}>
                {paused ? (
                  <i className='far fa-pause-circle'></i>
                ) : (
                  <i className='far fa-play-circle'></i>
                )}
              </span>
            ) : (
              <span onClick={() => setStreamEnded(true)} className='live-red'>
                LIVE
              </span>
            )}
            <span>
              <i className='fas fa-comment'></i>40
            </span>
            <span>
              <i className='fas fa-eye'></i>90
            </span>
            <span onClick={() => setMuted(!muted)}>
              {muted ? (
                <i className='fas fa-volume-mute'></i>
              ) : (
                <i className='fas fa-volume-up'></i>
              )}
            </span>
            <span onClick={() => console.log('liked...')}>
              <i className='fas fa-heart'></i>
            </span>
            <span onClick={() => setShowEllipseDiv(!showEllipseDiv)}>
              <i className='fas fa-ellipsis-v'></i>
            </span>
          </div>
        </div>
        <div className='livestream-ellipse-popup'>
          {showEllipseDiv && (
            <EllipsePopUp
              toggleChatDiv={toggleChatDiv}
              showChat={showChat}
              toggleSereneMode={toggleSereneMode}
              sereneMode={sereneMode}
            />
          )}
        </div>
        {search || pastStream ? (
          <div className='livestream-return-button'>
            <div className='return-button'>
              <button onClick={() => goBack()}>
                Return
                <i className='fas fa-arrow-circle-left'></i>
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div className='livestream-poster'>
        <div className='poster-title'>
          <h4>Drivers Protest in Bombay</h4>
          <span>Started streaming 30min ago</span>
        </div>
        <p>
          I attended the drivers protestation in Bombay. Very interesting events
          unfolding. Streaming it for the world to see the grievances of
          drivers. Enjoy Stream!
        </p>
      </div>
    </React.Fragment>
  );
};

export default LivestreamMainPlayer;
