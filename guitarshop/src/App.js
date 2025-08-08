import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GuitarBrands from './guitarBrands'; 
import './css/global.css';
import GuitarModels from './guitarModels';
import GuitarDetails from './guitarDetails';

function App() {
  return (
    <Routes>
      <Route path="/guitarBrands" element={<GuitarBrands />} />
      <Route path="/guitarModels" element={<GuitarModels />} />
      <Route path="/guitar/:id" element={<GuitarDetails />} />
      <Route path="/" element={<GuitarBrands />} />
    </Routes>
  );
}

export default App;
