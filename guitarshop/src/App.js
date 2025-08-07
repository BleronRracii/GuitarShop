import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GuitarBrands from './guitarBrands'; 
import './css/global.css';
import GuitarModels from './guitarModels';

function App() {
  return (
    <Routes>
      <Route path="/guitarBrands" element={<GuitarModels />} />
      <Route path="/" element={<GuitarBrands />} />
    </Routes>
  );
}

export default App;
