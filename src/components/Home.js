import React from 'react';
import Navbar from './Navbar';
import EditEmployer from './Employer/EditEmployer';
import Footer from './Footer';

const Home = () => {
  const displayDelChat = () => {
    document.getElementById('close-chat').style.display = 'flex'
  }
  const showFilters = () => {
    document.getElementById('filters').style.display = 'flex'
  }

  const showContact = () => {
    document.getElementById('contact-info').style.display = 'flex'
  }

  return (
    <div>
      <Navbar/ >
      <div className="separator" ></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div className="sidebar">
              <div className="">
                <ul>
                  <li>
                  <i className="fas fa-user-tie"></i>{' '}  Employer Profile{' '} <i className="fas fa-chevron-down"></i>
                  </li>
                  <li><i className="fas fa-car"></i>{' '}  Onboard Your Vehicle</li>
                  <li><i className="fas fa-search"></i>{' '}  Search & Hire Drivers</li>
                  <li className="sidebar-active"><i className="far fa-envelope"></i>{' '}  Inbox</li>
                  <li><i className="fas fa-briefcase"></i>{' '}  Recruitment</li>
                  <li><i className="fas fa-network-wired"></i>{' '}  My Organizations</li>
                  <li><i className="far fa-star"></i>{' '}  Rate a Driver</li>
                  <li><i className="fas fa-box"></i>{' '}  My subscriptions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-10">
            <EditEmployer />
          </div>
        </div>
      </div>
      <div className="pad-down"></div>
      <Footer />
    </div>
  );
}

export default Home;