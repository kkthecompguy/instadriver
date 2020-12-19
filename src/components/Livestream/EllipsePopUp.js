import React from 'react';

const EllipsePopUp = ({ toggleChatDiv, showChat, toggleSereneMode, sereneMode }) => {
  return (
    <div className='card card-body' id='ellipse-popup'>
      <span onClick={() => toggleSereneMode()}>{sereneMode ? 'Exit Serene Mode' : 'Serene Mode'}</span>
      <span onClick={() => toggleChatDiv()}>
        {showChat ? 'Hide Chat' : 'Show Chat'}
      </span>
      <span>Report Abuse</span>
    </div>
  );
};

export default EllipsePopUp;
