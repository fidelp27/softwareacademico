import React from 'react';

import './searchBar.css';

const SearchBar = ({ type, placeholder, setValue, name }) => {
  const handleChange = (e) => {
    setValue({
      [e.currentTarget.name]: e.target.value,
    });
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="searchBar"
      onChange={handleChange}
      name={name}
    />
  );
};
export default SearchBar;
