import React from 'react';

const RegisterPopUp = ({ closePopUp }) => {
  return (
    <div className="register-popup">
      <div className="btn-x"><span onClick={() => closePopUp()}>X</span></div>
      <div>
        <p className="register-msg">
        To interact with Instadriver features e.g creating driver profile, create posts, join groups, video call, livestream, gaming and many more activities, you have to:
        </p>
        <ul>
          <li>1{')'} Be a driver</li>
          <li>2{')'} Create an account</li>
        </ul>
      </div>
      <div className="register-links">
        <a href="#!" className="btn">Create a Driver Account</a>
        <a href="#!" className="btn">Sign In If You Have A Driver Account</a>
      </div>
    </div>
  );
}


export default RegisterPopUp;