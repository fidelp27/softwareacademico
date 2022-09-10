import React from 'react';
import SearchBar from './searchBar';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css';
import { useState } from 'react';
import { useSetSearchClient } from '../../../context/customerContext';

const SearchComponent = () => {
  const [value, setValue] = useState({
    nombre: '',
    identificacion: '',
  });
  const setSearchClient = useSetSearchClient();

  const Search = () => {
    setSearchClient(value);
  };

  return (
    <div className="search-container">
      <SearchBar
        type="text"
        placeholder={'Nombre'}
        setValue={setValue}
        name={'nombre'}
      />
      <SearchBar
        type="number"
        placeholder={'Identificación'}
        setValue={setValue}
        name={'identificacion'}
      />
      <SearchIcon onClick={() => Search()} />
    </div>
  );
};
export default SearchComponent;
