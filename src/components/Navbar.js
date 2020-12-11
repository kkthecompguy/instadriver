import React from 'react';

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-area">
        <div className="logo">
          <a href="#!">
            <img src="https://instadriver.co/img/logo.svg" alt="Logo"/>
          </a>
        </div>
        <div className="nav-list">
          <a href="#!">Jobs</a>
          <a href="#!">Get Social</a>
          <a href="#!" className="active">James Keem</a>
          <div className="nav-menu">
            Menu{" "}
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;