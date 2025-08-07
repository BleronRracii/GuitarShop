import './css/guitarModels.css';
import './css/guitarBrands.css';
import Butterfly from './assets/Butterfly.png';
import Guitar from './assets/guitar.png';
import ibanez from './assets/ibanez.png';
import image3 from './assets/image 3.png';
import FilterDropdown from './filter';

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
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4 d-flex flex-column align-items-center'>
            <FilterDropdown />
            <div style={{ marginTop: '16px', width: '100%' }}>
            </div>
          </div>
          <div className='col-4'>
<div class="group">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
  <input placeholder="Search by name" type="search" class="input" />
</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default GuitarModels;
