import React from 'react';
import Navbar from './Navbar';
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
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-5">
                <div className="section">
                  <div className="section-1">
                    <div className="search-area">
                      <div className="form-group has-search">
                        <span className="fas fa-search form-control-feedback"></span>
                        <input className="" placeholder="Search users, messages or chat id's" type="text"/>
                      </div>
                      <i className="fas fa-bars" onClick={() => showFilters()}></i>
                    </div>
                    <div className="filters" id="filters">
                      <div className="filters-header">
                        <h6>Filters</h6>
                      </div>
                      <div className="filters-body">
                        <select name="" id="" className="custom-select">
                          <option value="">message statuses</option>
                          <option value="">Read messages</option>
                          <option value="">Unread messages</option>
                          <option value="">Open but not responded</option>
                          <option value="">Ongoing discussion</option>
                          <option value="">Open discussion</option>
                        </select>
                        <select name="" id="" className="custom-select">
                          <option value="">Time of messages</option>
                          <option value="">last hour</option>
                          <option value="">12hrs ago</option>
                          <option value="">Today</option>
                          <option value="">This Week</option>
                          <option value="">This Month</option>
                          <option value="">This Year</option>
                        </select>
                        <button className="btn btn-warning text-white">Apply Filters</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inbox-container">
                  <div className="card card-body">
                    <div className="inbox active-inbox">
                      <div className="user-info">
                        <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image1" className="avatar"/>
                        <span className="info-name">Shirkly Cook</span>
                        <span className="info-username">@JohntheD</span>
                      </div>
                      <div className="inbox-overview">
                        <div className="chat-id">
                          <span>Chat ID: 34343JE</span>
                        </div>
                        <h4>Inquiry about reloca...</h4>
                        <p>Vacancy ads help you attract potential hires who are...</p>
                        <div className="time">
                          <span>11.00am</span>
                        </div>
                        <div className="message-count"><span>4</span></div>
                      </div>
                    </div>
                    <div className="inbox read">
                      <div className="user-info">
                        <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image1" className="avatar"/>
                        <span className="info-name">Shirkly Cook</span>
                        <span className="info-username">@JohntheD</span>
                      </div>
                      <div className="inbox-overview">
                        <div className="chat-id">
                          <span>Chat ID: 34343JE</span>
                        </div>
                        <h4>Inquiry about reloca...</h4>
                        <p>Vacancy ads help you attract potential hires who are...</p>
                        <div className="time">
                          <span>11.00am</span>
                        </div>
                        
                      </div>
                    </div>
                    <div className="inbox">
                      <div className="user-info">
                        <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image1" className="avatar"/>
                        <span className="info-name">Shirkly Cook</span>
                        <span className="info-username">@JohntheD</span>
                      </div>
                      <div className="inbox-overview">
                        <div className="chat-id">
                          <span>Chat ID: 34343JE</span>
                        </div>
                        <h4>Inquiry about reloca...</h4>
                        <p>Vacancy ads help you attract potential hires who are...</p>
                        <div className="time">
                          <span>11.00am</span>
                        </div>
                        <div className="message-count"><span>4</span></div>
                      </div>
                    </div>
                    <div className="inbox">
                      <div className="user-info">
                        <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image1" className="avatar"/>
                        <span className="info-name">Shirkly Cook</span>
                        <span className="info-username">@JohntheD</span>
                      </div>
                      <div className="inbox-overview">
                        <div className="chat-id">
                          <span>Chat ID: 34343JE</span>
                        </div>
                        <h4>Inquiry about reloca...</h4>
                        <p>Vacancy ads help you attract potential hires who are...</p>
                        <div className="time">
                          <span>11.00am</span>
                        </div>
                        <div className="message-count"><span>4</span></div>
                      </div>
                    </div>
                    <div className="inbox read">
                      <div className="user-info">
                        <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image1" className="avatar"/>
                        <span className="info-name">Shirkly Cook</span>
                        <span className="info-username">@JohntheD</span>
                      </div>
                      <div className="inbox-overview">
                        <div className="chat-id">
                          <span>Chat ID: 34343JE</span>
                        </div>
                        <h4>Inquiry about reloca...</h4>
                        <p>Vacancy ads help you attract potential hires who are...</p>
                        <div className="time">
                          <span>11.00am</span>
                        </div>
                        
                      </div>
                    </div>
                    <div className="inbox">
                      <div className="user-info">
                        <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image1" className="avatar"/>
                        <span className="info-name">Shirkly Cook</span>
                        <span className="info-username">@JohntheD</span>
                      </div>
                      <div className="inbox-overview">
                        <div className="chat-id">
                          <span>Chat ID: 34343JE</span>
                        </div>
                        <h4>Inquiry about reloca...</h4>
                        <p>Vacancy ads help you attract potential hires who are...</p>
                        <div className="time">
                          <span>11.00am</span>
                        </div>
                        <div className="message-count"><span>4</span></div>
                      </div>
                    </div>
                    <div className="inbox">
                      <div className="user-info">
                        <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image1" className="avatar"/>
                        <span className="info-name">Shirkly Cook</span>
                        <span className="info-username">@JohntheD</span>
                      </div>
                      <div className="inbox-overview">
                        <div className="chat-id">
                          <span>Chat ID: 34343JE</span>
                        </div>
                        <h4>Inquiry about reloca...</h4>
                        <p>Vacancy ads help you attract potential hires who are...</p>
                        <div className="time">
                          <span>11.00am</span>
                        </div>
                        <div className="message-count"><span>4</span></div>
                      </div>
                    </div>
                    <div className="inbox">
                      <div className="user-info">
                        <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image1" className="avatar"/>
                        <span className="info-name">Shirkly Cook</span>
                        <span className="info-username">@JohntheD</span>
                      </div>
                      <div className="inbox-overview">
                        <div className="chat-id">
                          <span>Chat ID: 34343JE</span>
                        </div>
                        <h4>Inquiry about reloca...</h4>
                        <p>Vacancy ads help you attract potential hires who are...</p>
                        <div className="time">
                          <span>11.00am</span>
                        </div>
                        <div className="message-count"><span>4</span></div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-7 col-lg-7">
                <div className="start-conversation">
                  <button className="btn btn-warning "><i className="fas fa-plus"></i> Start a new chat</button>
                </div>
                <div className="chat-box">
                  <div className="chat-box-header">
                    <div className="user-info">
                      <img src="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="avatar" alt="Image1"/>
                      <span className="info-name">Shirly Cook</span>
                      <span className="info-username">@JohntheD</span>
                    </div>
                    <div className="message-title">
                      <h4>Inquiry about relocation from Nairobi</h4>
                    </div>
                    <div className="info-btn">
                      <button className="btn" onClick={() => showContact()}><i className="fas fa-info"></i> Contact info</button>
                    </div>
                    <div id="more-btns" onClick={() => displayDelChat()}>
                      <i className="fas fa-ellipsis-v"></i>
                    </div>
                  </div>
                  <div className="message-box">
                    <div className="chat-id-2">
                      <span>Chat ID: 4874HHH9</span>
                    </div>
                    <div className="messages">
                      <div className="message-incoming">
                        <div className="message">
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam porro ea vero a nihil ipsa dolor nesciunt unde voluptatem!</p>
                        </div>
                        <span>11.00 am </span>
                      </div>
                      <div className="message-outgoing">
                        <div className="message">
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam porro ea vero a nihil ipsa dolor nesciunt unde voluptatem!</p>
                        </div>
                        <span className="delivered">11.30 am {' '} <i className="fas fa-check-double"></i></span>
                      </div>
                      <div className="message-incoming">
                        <div className="message">
                          <p>Lorem ipsum dolor </p>
                        </div>
                        <span>11.34 am </span>
                      </div>
                      <div className="message-outgoing">
                        <div className="message">
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam porro ea vero a nihil ipsa dolor nesciunt unde voluptatem!</p>
                          <span></span>
                        </div>
                        <span>11.40 am {" "} <i className="fas fa-check-double"></i></span>
                      </div>
                      <div className="message-outgoing">
                        <div className="message">
                          <p>Lorem ipsum dolor</p>
                        </div>
                        <span>12.50 pm {" "} <i className="fas fa-check"></i></span>
                      </div>
                    </div>
                    <div className="text-area">
                      <form>
                        <div>
                          <input type="text" placeholder="Type your message"/>
                        </div>
                        <div className="controls">
                          <div>
                            <span><i className="fas fa-paperclip"></i></span>
                            <span><i className="far fa-grin-alt"></i></span>
                            <span><i className="fas fa-microphone"></i></span>
                          </div>
                          <div><button><i className="far fa-paper-plane"></i></button></div>
                        </div>
                      </form>
                    </div>
                    <div className="close-chat" id="close-chat">
                      <button className="btn btn-secondary">Close Chat</button>
                      <button className="btn btn-secondary">Delete Chat</button>
                    </div>
                    <div className="contact-info" id="contact-info">
                      <div className="contact-header"><span><i className="fas fa-info"></i>Contact</span></div>
                      <div className="addresses">
                      <div>
                        <label htmlFor="no">Mobile Number</label>
                        <button className="btn btn-secondary">0733221133</button>
                      </div>
                      <div>
                        <label htmlFor="email">Email Address</label>
                        <button className="btn btn-secondary">johndoe@gmail.com</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pad-down"></div>
      <Footer />
    </div>
  );
}

export default Home;