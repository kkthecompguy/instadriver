import React from 'react';
import Map from '../../images/map.PNG'

const EditEmployer = () => {
  return (
    <div className='container'>
      {/* <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12'>
          <div className='cover-image'>
            <img src='' alt='BackgroudImage' />
            <div>
              <i className='fas fa-pencil-alt'></i>
            </div>
          </div>
          <div className='profile-button-area'>
            <div>
              <button>Exmployer X</button>
              <button>Exmployer X</button>
            </div>
            <div>
              <img src='' alt='profile-pic' />
            </div>
          </div>
        </div>
      </div> */}
      <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-7 mx-auto'>
          <div className="business-name py-4">
            <h6 className="custom-h6">Name of your business</h6>
            <p className="faded-color">
              This is the brand or company name. If your company is Tesla
              Automakers Limited, it is advisable you use the first name “Tesla”
              as the business name. If your business is not registered or has no
              brand name, you can just type something like “John’s Hustle” Or
              “Mary Taxis” assuming your name is Mary and you are in taxi
              business. Hey! you are free to be creative and come up with
              anything you want.
            </p>
            <form>
              <div>
                <input
                  type='text'
                  name='business-name'
                  id='business-name'
                  placeholder='[Maximum of 30 character]'
                  className='form-control'
                />
                <div className="text-right">
                  <span>0/30</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className="instahandler py-4">
            <h6 className="custom-h6">Instadriver handle for employees</h6>
            <p className="faded-color">
              This is a unique business handle for your business. When people
              click this unique url, they will be redirected to your business
              page.
            </p>
            <form>
              <div>
                <div className="insta-web">
                  <span>www.instadriver.com/business/</span>
                  <input
                    type='text'
                    name='instahandler'
                    id='instahandler'
                    className='form-control'
                  />
                </div>
                <div className="text-right">
                  <span>0/30</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className="business-website py-4">
            <h6 className="custom-h6">Website for your business</h6>
            <p className="faded-color">
              If you do not have a website, dont sweat over it. Just use our
              Instadriver business handle above. If you do have a website,
              please show it to the visitors.
            </p>
            <form>
              <div>
                <div className="insta-web">
                <input
                  type='text'
                  name='website'
                  id='website'
                  className='form-control'
                />
                </div>
                <div className="text-right">
                  <span>0/30</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className="business-tagline py-4">
            <h6 className="custom-h6">Your business tagline</h6>
            <p className="faded-color">
              Give us a one-liner that summarises your company, vision, mission
              etc. What is your business mantra? Tell people who you are and
              what you stand for in a few succinct words. For Uber, they may
              have their tagline as “We ignite opportunity by setting the world
              in motion”. Whats your tagline?
            </p>
            <form>
              <div>
                <input
                  type='text'
                  name='tagline'
                  id='tagline'
                  className='form-control'
                  placeholder='Maximum 50 Characters'
                />
                <div className='text-right'>
                  <span>0/50</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className="business-about py-4">
            <h6 className="custom-h6">About your business</h6>
            <p className="faded-color">
              Let people know about your business and what it does. Potential
              clients, partners, and hires would love to get an idea of your
              business. Provide a brief description here.
            </p>
            <form>
              <div>
                <textarea
                  name='about-business'
                  id='about-business'
                  cols='20'
                  rows='10'
                  placeholder='(Minimum of 300 and Maximum of 500 characters)'
                ></textarea>
                <div className="text-right">
                  <span>0/500</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className="business-location py-4">
            <h6 className="custom-h6">Enter business location</h6>
            <p className="faded-color">
              By default, the location displayed will be of your city you first
              registered an account. You can choose a specific location if you
              want the visitors to know the physical location of your business.
            </p>
            <form>
              <div>
                <div className="location">
                  <input
                    type='text'
                    name='location'
                    id='location'
                    className='form-control'
                    placeholder='Nairobi Kenya'
                  />
                </div>
              </div>
              <div id='map-box' style={{background:`url(${Map})`}}>Map here</div>
              <button type='submit' className='custombtn'>
                Save Location
              </button>
            </form>
          </div>

          <div className="business-contact py-4">
            <h6 className="custom-h6">Contact Information</h6>
            <p className="faded-color">
              Those with reservations with providing contact information, don’t
              worry, we have privacy settings to protect you. For the rest, to
              get clients, partners, amazing people to hire, et cetera, you need
              to provide contact information for your business. Please insert
              your contact information here, you will decide to show them
              publicly or not in the next section.
            </p>
            <form>
              <div className="business-cat-info">
                <div>
                  <label htmlFor='phone'>Your Phone Number</label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    className='form-control'
                    placeholder='Insert Your Phone Number'
                  />
                </div>
                <div>
                  <label htmlFor='email'>Your Phone Email Address</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='form-control'
                    placeholder='Insert Your Email Address'
                  />
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className="visiblity py-4">
            <h6 className="custom-h6">Visibility settings for your contact information</h6>
            <form>
              <div className="visibility-row">
                <input
                  type='checkbox'
                  name='visibility'
                  id='visibility'
                />
                <div>
                  <h6>Make my contact information public</h6>
                  <p className="faded-color">
                    By making your contact information public, your phone number
                    and email address you inserted above will be visible on your
                    business page and on your vacancy ads.
                  </p>
                </div>
              </div>
              <div className="visibility-row">
                <input
                  type='checkbox'
                  name='visibility'
                  id='visibliy'
                />
                <div>
                  <h6>
                    Do NOT make my contact information public instead show “DM
                    The Business” button
                  </h6>
                  <p className="faded-color">
                    By choosing this option, your phone number and email address
                    you inserted above will NOT be visible on your business page
                    and on your vacancy ads. Instead we will show “DM The
                    Business” button, and visitors will have to send a text
                    message and you will receive the messages on your inbox
                    section of your Instadriver account.
                  </p>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployer;
