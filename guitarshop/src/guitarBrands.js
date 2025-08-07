import React from 'react';
import Footer from './footer'; 
import './css/guitarBrands.css';
import Butterfly from './assets/Butterfly.png';
import Guitar from './assets/guitar.png';
 
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
          
    <div class="col-md-3" key={brand.id}>
      <div class="card text-center">
        <div class="card-body">
          {/* {brand.name} ({brand.origin}) */}
            {brand.image && <img src={brand.image} alt={brand.name} style={{height: 40}} />}
        </div>
      </div>
    </div> 
           
          
        ))}

  </div>
</div>
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
