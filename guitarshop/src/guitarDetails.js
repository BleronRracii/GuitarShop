import React, { useState } from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import './css/guitarDetails.css';
import Footer from './footer';
import ibanez from './assets/ibanez.png';
import image3 from './assets/image 3.png';
import Butterfly from './assets/Butterfly.png';
const FIND_UNIQUE_MODEL = gql`
  query FindUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name 
      type
      image
      description
      price  
      musicians {
        name
        musicianImage
        bands 
      }
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
    }
  }
`;

function GuitarDetails() {
  const [activeTab, setActiveTab] = useState('specs');
  const [musicianIndex, setMusicianIndex] = useState(0);
  const location = useLocation();
  console.log('location', location.state)
  const { brandId, modelId, ...fallback } = location.state || {};
  const { data, loading, error } = useQuery(FIND_UNIQUE_MODEL, {
    skip: !brandId || !modelId,
    variables: { brandId, modelId },
  });

  if (loading) return <div className="guitar-details">Loading...</div>;
  if (error) return <div className="guitar-details">Error loading details.</div>;

  // Use API data if available, otherwise fallback to navigation state
  const model = data?.findUniqueModel || fallback;

  if (!model) return <div className="guitar-details">No details found.</div>;

  // Custom carousel logic for musicians

  const musicians = model.musicians && model.musicians.length > 0 ? model.musicians : null;

  const handlePrev = () => {
    if (!musicians) return;
    setMusicianIndex((prev) => (prev === 0 ? musicians.length - 1 : prev - 1));
  };
  const handleNext = () => {
    if (!musicians) return;
    setMusicianIndex((prev) => (prev === musicians.length - 1 ? 0 : prev + 1));
  };
  
  const handleBack = () => {
    window.location.href = '/guitarModels';
  };
  return (
    <div className="container p-0 bg-white">
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1000 }}>
        <button
          onClick={handleBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            color: '#222',
            fontSize: '1.1rem',
            cursor: 'pointer',
            fontFamily: 'Circular Std, Arial, sans-serif',
            fontWeight: 'bold',
            padding: 0
          }}
        >
          <span style={{ fontSize: '1.5rem', marginRight: 8 }}>&larr;</span>
          Back To List
        </button>
      </div>
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
          <img  src={ibanez} className='guitar' /> 
          <img src={location.state.image}  className='guitar-details-img' /> 

          <img src={Butterfly} className='rrethi' width={10} height={10} />
        </div>

      </div>

    <div className="guitar-info-container">
      <div className="tab-header">
        <span
          className={activeTab === 'specs' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('specs')}
        >
          Specification
        </span>
        <span
          className={activeTab === 'players' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('players')}
        >
          Who plays it?
        </span>
      </div>
      <div className="tab-content">
        {activeTab === 'specs' ? (
          <div className="specs-section">
            <div className="row d-flex flex-row align-items-center justify-content-center">

            <p className='desc mt-5'>{model.description}</p>
            </div>
            <div className="row d-flex flex-row align-items-center justify-content-center">

            <ul className='desc mt-5'>
  {model.specs && typeof model.specs === 'object' ? (
    Object.entries(model.specs)
      .filter(([key]) => key !== '__typename') // 🚫 Remove __typename
      .map(([key, value]) => (
        <li key={key}>
          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: {String(value)}
        </li>
      ))
  ) : (
    <li>No specifications available.</li>
  )}
</ul>
            </div>
          </div>
        ) : (
          <div className="carousel-custom-container">
            {musicians ? (
              <>
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={musicians[musicianIndex].musicianImage || 'https://via.placeholder.com/300x250?text=Musician'}
                    alt={musicians[musicianIndex].name}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{musicians[musicianIndex].name}</h5>
                    {musicians[musicianIndex].bands && <p>{musicians[musicianIndex].bands}</p>}
                  </div>
                </div>
                <div className="carousel-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                  <button className="carousel-control-prev d-none" type="button" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </button>
                  <div className="carousel-indicators" style={{ display: 'flex', gap: 6 }}>
                    {musicians.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={idx === musicianIndex ? 'active' : ''}
                        style={{ width: 10, height: 10, borderRadius: '50%', border: 'none', background: idx === musicianIndex ? '#8e44ad' : '#ccc', cursor: 'pointer' }}
                        onClick={() => setMusicianIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button className="carousel-control-next d-none" type="button" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="player-card">
                <p>No famous musicians listed for this model.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    <Footer /> 
    </div>
  );
}

export default GuitarDetails;
