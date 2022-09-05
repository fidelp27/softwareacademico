import React from 'react';
import './searchBar.css';

const SearchBar = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="searchBar" />;
};
export default SearchBar;
