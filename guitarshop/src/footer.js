import React from 'react';
import './css/footer.css';
import Butterfly from './assets/Butterfly.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="vibeS">
          <img src={Butterfly} alt="House image" className='Butterfly'/>
          <h3>VibeStrings</h3>
      </div>
    </footer>
  );
}

export default Footer;
