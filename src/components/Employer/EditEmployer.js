import React, { useState } from 'react';
import MapContainer from '../MapComp/Map';

const EditEmployer = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    instahandler: '',
    website: '',
    tagline: '',
    businessAbout: '',
    location: '',
    phoneNumber: '',
    emailAddress: '',
    visibility: 'makeVisible',
  });

  const {
    businessName,
    instahandler,
    website,
    tagline,
    businessAbout,
    location,
    phoneNumber,
    emailAddress,
    visibility,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getLocation = location => {
    setFormData({...formData, location: location})
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-7 mx-auto'>
          <div className='business-name py-4'>
            <h6 className='custom-h6'>Name of your business</h6>
            <p className='faded-color'>
              This is the brand or company name. If your company is Tesla
              Automakers Limited, it is advisable you use the first name “Tesla”
              as the business name. If your business is not registered or has no
              brand name, you can just type something like “John’s Hustle” Or
              “Mary Taxis” assuming your name is Mary and you are in taxi
              business. Hey! you are free to be creative and come up with
              anything you want.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(businessName);
              }}
            >
              <div>
                <input
                  type='text'
                  name='businessName'
                  id='businessName'
                  value={businessName}
                  required
                  onChange={(e) => handleChange(e)}
                  placeholder='[Maximum of 30 character]'
                  className='form-control'
                />
                <div className='text-right'>
                  <span>0/30</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className='instahandler py-4'>
            <h6 className='custom-h6'>Instadriver handle for employees</h6>
            <p className='faded-color'>
              This is a unique business handle for your business. When people
              click this unique url, they will be redirected to your business
              page.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(instahandler);
              }}
            >
              <div>
                <div className='insta-web'>
                  <span>www.instadriver.com/business/</span>
                  <input
                    type='text'
                    name='instahandler'
                    value={instahandler}
                    required
                    onChange={(e) => handleChange(e)}
                    id='instahandler'
                    className='form-control'
                  />
                </div>
                <div className='text-right'>
                  <span>0/30</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className='business-website py-4'>
            <h6 className='custom-h6'>Website for your business</h6>
            <p className='faded-color'>
              If you do not have a website, dont sweat over it. Just use our
              Instadriver business handle above. If you do have a website,
              please show it to the visitors.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(website);
              }}
            >
              <div>
                <div className='insta-web'>
                  <input
                    type='text'
                    name='website'
                    value={website}
                    onChange={(e) => handleChange(e)}
                    id='website'
                    required
                    className='form-control'
                  />
                </div>
                <div className='text-right'>
                  <span>0/30</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className='business-tagline py-4'>
            <h6 className='custom-h6'>Your business tagline</h6>
            <p className='faded-color'>
              Give us a one-liner that summarises your company, vision, mission
              etc. What is your business mantra? Tell people who you are and
              what you stand for in a few succinct words. For Uber, they may
              have their tagline as “We ignite opportunity by setting the world
              in motion”. Whats your tagline?
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(tagline);
              }}
            >
              <div>
                <input
                  type='text'
                  name='tagline'
                  id='tagline'
                  value={tagline}
                  onChange={(e) => handleChange(e)}
                  className='form-control'
                  required
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

          <div className='business-about py-4'>
            <h6 className='custom-h6'>About your business</h6>
            <p className='faded-color'>
              Let people know about your business and what it does. Potential
              clients, partners, and hires would love to get an idea of your
              business. Provide a brief description here.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(businessAbout);
              }}
            >
              <div>
                <textarea
                  name='businessAbout'
                  id='businessAbout'
                  required
                  value={businessAbout}
                  onChange={(e) => handleChange(e)}
                  cols='20'
                  rows='10'
                  placeholder='(Minimum of 300 and Maximum of 500 characters)'
                ></textarea>
                <div className='text-right'>
                  <span>0/500</span>
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className='business-location py-4'>
            <h6 className='custom-h6'>Enter business location</h6>
            <p className='faded-color'>
              By default, the location displayed will be of your city you first
              registered an account. You can choose a specific location if you
              want the visitors to know the physical location of your business.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(location);
              }}
            >
              <input type="hidden" name="location" value={location} />
              <div>
                <MapContainer getLocation={getLocation} />
              </div>
              <button type='submit' className='custombtn'>
                Save Location
              </button>
            </form>
          </div>

          <div className='business-contact py-4'>
            <h6 className='custom-h6'>Contact Information</h6>
            <p className='faded-color'>
              Those with reservations with providing contact information, don’t
              worry, we have privacy settings to protect you. For the rest, to
              get clients, partners, amazing people to hire, et cetera, you need
              to provide contact information for your business. Please insert
              your contact information here, you will decide to show them
              publicly or not in the next section.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(phoneNumber, emailAddress);
              }}
            >
              <div className='business-cat-info'>
                <div>
                  <label htmlFor='phone'>Your Phone Number</label>
                  <input
                    type='text'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={(e) => handleChange(e)}
                    id='phoneNumber'
                    className='form-control'
                    required
                    placeholder='Insert Your Phone Number'
                  />
                </div>
                <div>
                  <label htmlFor='email'>Your Phone Email Address</label>
                  <input
                    type='email'
                    name='emailAddress'
                    value={emailAddress}
                    onChange={(e) => handleChange(e)}
                    id='email'
                    className='form-control'
                    required
                    placeholder='Insert Your Email Address'
                  />
                </div>
              </div>
              <button type='submit' className='custombtn'>
                Save
              </button>
            </form>
          </div>

          <div className='visiblity py-4'>
            <h6 className='custom-h6'>
              Visibility settings for your contact information
            </h6>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(visibility);
              }}
            >
              <div className='visibility-row'>
                <div className='form-check upper'>
                  <input
                    type='radio'
                    name='visibility'
                    value="makeVisible"
                    onChange={(e) => handleChange(e)}
                    checked={visibility === 'makeVisible'}
                    id='radio1'
                    className='form-check-input'
                  />
                  <label htmlFor='radio1'></label>
                </div>
                <div>
                  <h6>Make my contact information public</h6>
                  <p className='faded-color'>
                    By making your contact information public, your phone number
                    and email address you inserted above will be visible on your
                    business page and on your vacancy ads.
                  </p>
                </div>
              </div>
              <div className='visibility-row'>
                <div className='form-check upper'>
                  <input
                    type='radio'
                    name='visibility'
                    value="NotVisible"
                    onChange={e => handleChange(e)}
                    checked={visibility === 'NotVisible'}
                    id='radio2'
                    className='form-check-input'
                  />
                  <label htmlFor='radio2'></label>
                </div>
                <div>
                  <h6>
                    Do NOT make my contact information public instead show “DM
                    The Business” button
                  </h6>
                  <p className='faded-color'>
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
