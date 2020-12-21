import React from 'react';

const EllipsePopUp = ({ toggleChatDiv, showChat, toggleSereneMode, sereneMode, isAuthenticated, triggerPopUp }) => {
  return (
    <div className='card card-body' id='ellipse-popup'>
      <span onClick={() => toggleSereneMode()}>{sereneMode ? 'Exit Serene Mode' : 'Serene Mode'}</span>
      <span onClick={() => toggleChatDiv()}>
        {showChat ? 'Hide Chat' : 'Show Chat'}
      </span>
      { isAuthenticated ? (
        <span onClick={() => console.log('am reporting abuse')}>Report Abuse</span>
      ) : (
        <span onClick={() => triggerPopUp()}>Report Abuse</span>
      )}
    </div>
  );
};

export default EllipsePopUp;
