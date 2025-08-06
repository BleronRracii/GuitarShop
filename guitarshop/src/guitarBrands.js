import React from 'react';
import Footer from './footer';
import './css/guitarBrands.css';
import Butterfly from './assets/Butterfly.png';
import Guitar from './assets/guitar.png';
function GuitarBrands() {
  return (
    <div className="guitar-brands">

      <div className="container1">

        <div className="logo">
          <div className='flutur'>
          <img src={Butterfly} className='Butterfly' />
          <p className='txt'>VibeStrings</p>
          </div>
          
          <div className='browse'>
            <p className='title'>Browse top quality</p>
            <span className='title' style={{ color: '#FF6428' }}>Guitars online</span>
              <p className='subtitle'>Explore 50k+ latest collections of branded guitars</p>
              <p className='subtitle'>online with VibeStrings.</p>
            </div>

        </div>


        <div className='gitare'>
          <img src={Guitar} className='guitar' width={672} height={586} />
        </div>

      </div>


      <div className="container2">
        <p>Explore our wide range of guitar brands.</p>
      </div>

      <div className="container3">
        <p>Contact us for more information.</p>
      </div>

      <div className="container4">
        <p>Follow us on social media for updates.</p>
      </div>

      <Footer /> 
    </div>
     
  );
}

export default GuitarBrands;
