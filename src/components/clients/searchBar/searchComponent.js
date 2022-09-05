import React from 'react';
import SearchBar from './searchBar';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css';

const SearchComponent = () => {
  return (
    <div className="search-container">
      <SearchBar type="text" placeholder={'Nombre'} />
      <SearchBar type="number" placeholder={'Identificación'} />
      <SearchIcon />
    </div>
  );
};
export default SearchComponent;
