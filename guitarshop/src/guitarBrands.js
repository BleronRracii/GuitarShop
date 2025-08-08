import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer'; 
import './css/guitarBrands.css';
import Butterfly from './assets/Butterfly.png';
import Sbrowse from './assets/Sbrowsing.png';
import deliver from './assets/deliver.png';
import wallet from './assets/wallet.png';
import Guitar from './assets/guitar.png';
import playstore from './assets/playstore.png';
import appstore from './assets/appstore.png';
import circle from './assets/circle.png';
import s3 from './assets/guitar s3.png';
import s1 from './assets/guitar s1.png';
 
import { useQuery, gql } from '@apollo/client';

const GET_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
      origin
      image
    }
  }
`;

function GuitarBrands() {
  const { loading, error, data } = useQuery(GET_BRANDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.findAllBrands) return null;
  return (
    <div className="guitar-brands">

      <div className="container1">

        <div className="logo mt-5">
          <div className='flutur'>
          <img src={Butterfly} className='Butterfly' />
          <p className='txt m-0'>VibeStrings</p>
          </div>
          
          <div className='browse mt-5'>
            <p className='title'>Browse top quality</p>
            <p className='title'>
            <span className='title' style={{ color: '#FF6428' }}>Guitars </span> online
            </p>
              <p className='subtitle'>Explore 50k+ latest collections of branded guitars</p>
              <p className='subtitle'>online with VibeStrings.</p>
            </div>

        </div>


        <div className='gitare'>
          <img src={Guitar} className='guitar' width={672} height={586} />
          <img src={Butterfly} className='rrethi' width={10} height={10} />
        </div>

      </div>

 
      <div className="container2">
        <div className='title2'> 
          <p className='title' style={{ color: '#FF6428' }}> 
            <span className='title' style={{ color: '#000000ff' }}>Featuring the </span> Best Brands
            </p>
          <p className='subtitle'>Select your preferred brand and explore our exquisite collection.</p>
        </div>
        <div class="container bg-white py-5">
  <div class="row g-4">

{data.findAllBrands.map(brand => (
  <div className="col-md-3" key={brand.id}>
    <Link
      to="/guitarModels"
      state={{ brandId: brand.id, brandName: brand.name }}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card text-center">
        <div className="card-body">
          {/* {brand.name} ({brand.origin}) */}
          {brand.image && <img src={brand.image} alt={brand.name} style={{height: 40}} />}
        </div>
      </div>
    </Link>
  </div>
))}

  </div>
</div>
      </div>

      <div className="container3">
        <p className='con3title'>Why try <span className='sen' style={{ color: '#FF6428' }}>VibeStrings?</span></p>
        <div className='d-flex row peding m-5'>
        <div className='col-4 d-flex flex-column justify-content-center align-items-center'>
          <div className='borders'>
          <img src={Sbrowse} className='icons' />
          </div>
          <p className='subtitra'>Smooth browsing</p>
          <p className='titrat'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
        </div>
        <div className='col-4 d-flex flex-column justify-content-center align-items-center'>
          <div className='borders'>
          <img src={deliver} className='icons' />
          </div>
          <p className='subtitra'>Easy Delivery</p>
          <p className='titrat'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
        </div>
        <div className='col-4 d-flex flex-column justify-content-center align-items-center'>
          <div className='borders'>
          <img src={wallet} className='icons' />
          </div>
          <p className='subtitra'>Swift Payments</p>
          <p className='titrat'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
        </div>
      </div>
      </div>

      <div className="container4">
        <div className='d-flex row m-5'>
        <div className='col-6 sector1'>
          <p className='para1'>
            Browse and buy your<br/> <span style={{ color: '#FF6428' }}>favorite guitars</span> with<br/> VibeStrings.
          </p>
          <div className='pstore'>
            <img src={playstore} className='playstore' />
            <img src={appstore} className='appstore' />
          </div>
        </div>
        <div className='col-6  circle'>
          <img src={s3} className='s3' />
          <img src={s1} className='s1' />
        </div>
        
      </div>
      </div>

      <Footer /> 
    </div>
     
  );
}

export default GuitarBrands;
