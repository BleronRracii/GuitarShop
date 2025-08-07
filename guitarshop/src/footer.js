import React from 'react';
import './css/footer.css';
import Butterfly from './assets/Butterfly.png';
import sms from './assets/sms.png';
import location from './assets/location.png';
import Facebook from './assets/Facebook.png';
import Twitter from './assets/Twitter.png';
import Instagram from './assets/Instagram.png';
function Footer() {
  return (
    <footer className="container">
      <div className='footer'>
<div className='first'>

      <div className="logo-footer">
          <img src={Butterfly} className='Butterfly' />
          <p className='txt'>VibeStrings</p>
      </div>
      <div className="sms" >
         <img src={sms} className='sms' />
         <p className='txt1'>Enquiry@VibeStrings.com</p>
      </div>

      <div className="sms" >
         <img src={location} className='location' />
         <p className='txt1'>Enquiry@VibeStrings.com</p>
      </div>

      </div>
      <div className='first'>
        <p className='title'>PAGES</p>
        <p className='p1'>Store</p>
        <p className='p1'>Collections</p>
        <p className='p1'>Support</p>
      </div>
      <div className='first'>
        <p className='title'>PRODUCT</p>
        <p className='p1'>Terms</p>
        <p className='p1'>Privatcy Policy</p>
        <p className='p1'>Copyright</p>
      </div>
      <div className='first'>
        <p className='title'>FOLLOW US</p>
        <div className='social'>
          <img src={Facebook} className='Facebook' />
          <img src={Twitter} className='Twitter' />
          <img src={Instagram} className='Instagram' />
        </div>
      </div>
      </div>
      <div className='copyright'>
        <p className='txt3'>© 2022 Copyright.VibeStrings</p>
      </div>
    </footer>
  );
}

export default Footer;
