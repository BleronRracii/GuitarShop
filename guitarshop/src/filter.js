import React, { useRef, useState, useEffect } from 'react';
import './css/FilterDropdown.css'; // optional: move styles here

const FilterDropdown = () => {
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

  return (
    <div className="filter-container" onClick={toggleDropdown} ref={dropdownRef}>
      <svg className="filter-icon" viewBox="0 0 24 24">
        <path d="M3 4h18v2l-7 9v5l-4 2v-7L3 6V4z" />
      </svg>
      <span>Filter by type</span>
      <svg className="dropdown-arrow" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z" />
      </svg>

      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">Option 1</div>
          <div className="dropdown-item">Option 2</div>
          <div className="dropdown-item">Option 3</div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
