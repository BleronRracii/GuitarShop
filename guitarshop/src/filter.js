import React, { useRef, useState, useEffect } from 'react';
import './css/FilterDropdown.css'; // optional: move styles here

const FilterDropdown = ({ options = [], selected = '', onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Props: options, selected, onSelect
  // options: array of types
  // selected: current selected type
  // onSelect: callback
  return (
    <div className="filter-container" ref={dropdownRef}>
      <div onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <svg className="filter-icon" viewBox="0 0 24 24">
          <path d="M3 4h18v2l-7 9v5l-4 2v-7L3 6V4z" />
        </svg>
        <span style={{ marginLeft: 8, fontWeight: selected ? 'bold' : 'normal' }}>
          {selected ? selected : 'Filter by type'}
        </span>
        <svg className="dropdown-arrow" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      {isOpen && (
        <div className="dropdown">
          <div
            className="dropdown-item"
            style={{ fontWeight: !selected ? 'bold' : 'normal', cursor: 'pointer' }}
            onClick={() => { onSelect(''); setIsOpen(false); }}
          >
            All Types
          </div>
          {options.map((type, idx) => (
            <div
              key={type}
              className="dropdown-item"
              style={{ fontWeight: selected === type ? 'bold' : 'normal', cursor: 'pointer' }}
              onClick={() => { onSelect(type); setIsOpen(false); }}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
