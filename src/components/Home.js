import React from 'react';
import Navbar from './Navbar';
import Routes from '../routes';
import Footer from './Footer';

const Home = () => {

  return (
    <div>
      <Navbar/ >
      <div className="separator" ></div>
      <Routes />
      <div className="pad-down"></div>
      <Footer />
    </div>
  );
}

export default Home;