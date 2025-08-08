import './css/guitarModels.css';
import './css/guitarBrands.css';
import './css/pagination.css';
import './css/pagination.css';
import Butterfly from './assets/Butterfly.png';
import Guitar from './assets/guitar.png';
import ibanez from './assets/ibanez.png';
import image3 from './assets/image 3.png';
import FilterDropdown from './filter';
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import Footer from './footer';


const FIND_MODELS_BY_BRAND = gql`
  query FindUniqueBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
      categories
      models {
        id
        name
        type
        image
        description
        price
      }
    }
  }
`;

function GuitarModels() {
  // ...existing code...
  // Back button handler
  const handleBack = () => {
    window.location.href = '/';
  };
  const location = useLocation();
  const brandId = location.state?.brandId || '';
  const { data, loading, error } = useQuery(FIND_MODELS_BY_BRAND, {
    skip: !brandId,
    variables: { id: brandId },
  });

  // Pagination logic
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const models = data?.findUniqueBrand?.models || [];
  const totalResults = models.length;
  const totalPages = Math.ceil(totalResults / pageSize);
  const paginatedModels = models.slice((page - 1) * pageSize, page * pageSize);

  // Pagination numbers logic (with ellipsis)
  const getPageNumbers = () => {
    const numbers = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) numbers.push(i);
    } else {
      if (page <= 4) {
        numbers.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (page >= totalPages - 3) {
        numbers.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        numbers.push(1, '...', page - 1, page, page + 1, '...', totalPages);
      }
    }
    return numbers;
  };
  const pageNumbers = getPageNumbers();
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };


  return (
    <div className="guitar-models">
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
          Back To Home
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
          <img src={ibanez} className='guitar' />
          <img src={image3} className='img3'/>
          <img src={Butterfly} className='rrethi' width={10} height={10} />
        </div>

      </div>
      <div className='guitarmodels'>
        <div className='row  ' style={{ padding: '0', margin: '0' ,width:'98vw' }}>
          <div className='col-4'></div>
          <div className='col-4 d-flex flex-row-reverse align-items-center'>
            <FilterDropdown />
             
          </div>
          <div className='col-4'>
<div class="group">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
  <input placeholder="Search by name" type="search" class="input" />
</div>
          </div>
        </div>
  {/* ...existing code... */}
        <div className='row p-5 m-5  pb-0'>
          {loading && <div>Loading models...</div>}
          {error && <div>Error loading models.</div>}
          {paginatedModels.length === 0 && !loading && !error && (
            <div className="col-md-12">No models found for this brand.</div>
          )}
          {paginatedModels.map(model => (
            <div className="col-md-4" key={model.id}>
              <div className="card text-center   mb-4"  style={{ height: '348px',overflow:'auto' }}>
                {model.image && (
                  <img src={model.image} alt={model.name} className="card-img-top" style={{ maxHeight: '180px', objectFit: 'cover', borderRadius: '18px 18px 0 0' }} />
                )}
                <div className="card-body">
                  <h5 className="card-title-figma" >{model.name}</h5>
                  {/* <p className="card-text" style={{ color: '#333', fontSize: '1rem' }}>{model.description}</p> */}
                  {/* <span style={{ color: '#888', fontSize: '0.95rem' }}>Type: {model.type}</span><br/> */}
                  <h5  className='card-price-figma' > ${model.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row align-items-center px-5 mx-5   pb-5">
          <div className="col-md-6 text-start">
            <span className='resultsmix' >
              
              SHOWING 
              <span style={{   color: '#3D3D46' }}> {paginatedModels.length} </span>
               RESULTS FROM 
               <span style={{   color: '#3D3D46' }}> {totalResults}</span>
               
            </span>
          </div>
          <div className="col-md-6 text-end">
            {totalPages > 1 && (
              <div className="pagination-container" style={{ margin: 0, justifyContent: 'flex-end' }}>
                <button
                  className="pagination-button"
                  disabled={page === 1}
                  onClick={() => handlePageChange(page - 1)}
                >
                  &lt;
                </button>
                {pageNumbers.map((number, index) =>
                  number === "..." ? (
                    <span key={index} className="pagination-dots">...</span>
                  ) : (
                    <button
                      key={index}
                      className={`pagination-button ${page === number ? "active" : ""}`}
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </button>
                  )
                )}
                <button
                  className="pagination-button"
                  disabled={page === totalPages}
                  onClick={() => handlePageChange(page + 1)}
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
          
        </div>
  {/* Removed duplicate bottom pagination menu */}
        
      </div>
      <div className="row" style={{ padding: '0', margin: '0' ,width:'100%' }}>
        <Footer />
      </div>
      
    </div>
  );
}

export default GuitarModels;
