import React from 'react';
import backgroundImg from '../images/dark-bg.jpg';

const Footer = () => {
  return (
    <div
      className='footer'
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto text-center'>
            <img src='https://instadriver.co/img/footerlogo.svg' className="footer-img" alt='' />
          </div>
        </div>
        <div className="divider"><span></span><span></span></div>
        <div className='footer-links'>
          <div>
            <h4>Useful links</h4>
            <ul className='list-column'>
              <li>
                <a href='#!'>About InstaDriver</a>
              </li>
              <li>
                <a href='#!'>Verified Search (For Employers & Drivers)</a>
              </li>
              <li>
                <a href='#!'>Top Ad Feature (For Employers & Drivers)</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Useful links</h4>
            <ul className='list-column'>
              <li>
                <a href='#!'>Driver Sign In</a>
              </li>
              <li>
                <a href='#!'>Driver Sign Up</a>
              </li>
              <li>
                <a href='#!'>Employers Sign Up</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Useful links</h4>
            <ul className='list-column'>
              <li>
                <a href='#!'>FAQs</a>
              </li>
              <li>
                <a href='#!'>Contact Us</a>
              </li>
              <li>
                <a href='#!'>Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Useful links</h4>
            <ul className='list-row'>
              <li>
                <a href='#!'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#!'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#!'>
                  <i className='fab fa-youtube'></i>
                </a>
              </li>
              <li>
                <a href='#!'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <ul className='list-column'>
              <li>
                <a href='#!'>saysomething@instadrive.co</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
