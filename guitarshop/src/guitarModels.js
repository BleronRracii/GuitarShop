import './css/guitarModels.css';
import './css/guitarBrands.css';
import Butterfly from './assets/Butterfly.png';
import Guitar from './assets/guitar.png';
import ibanez from './assets/ibanez.png';
import image3 from './assets/image 3.png';

function GuitarModels() {
  return (
    <div className="guitar-models">
      <div className="container1">

        <div className="logo mt-5">
          <div className='flutur'>
          <img src={Butterfly} className='Butterfly' />
          <p className='txt m-0'>VibeStrings</p>
          </div>
          
          <div className='browseModel mt-5'>
            <p className='title'>Play like a <span className='title' style={{ color: '#FF6428' }}>Rock star </span> </p>
              <span className='tekst'>With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, Ibanez guitars are built to play fast, sound bold, and stand out on any stage.
Ask ChatGPT</span>
            </div>

        </div>


        <div className='gitare'>
          <img src={ibanez} className='guitar' />
          <img src={image3} className='img3'/>
          <img src={Butterfly} className='rrethi' width={10} height={10} />
        </div>

      </div>
      <div className='guitarmodels'>
        <p className='txt'>
          Check out the<span className='title' style={{ color: '#FF6428' }}>Selection </span>
        </p>
      </div>
    </div>
  );
}

export default GuitarModels;
