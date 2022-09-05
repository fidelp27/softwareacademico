import React from 'react';
import { Link } from 'react-router-dom';
import { useIsAuth } from '../../context/authContext';
import './aside.css';
import PhotoContainer from './photo';

const AsideMenu = () => {
  const isAuth = useIsAuth();

  return (
    <aside className="aside-container">
      {isAuth && (
        <>
          <PhotoContainer />
          <h1>Menu</h1>
          <Link to="/">Inicio</Link>
          <Link to="/clients">Consulta Clientes</Link>
          <Link to="/createClient">Form create</Link>
        </>
      )}
    </aside>
  );
};

export default AsideMenu;
