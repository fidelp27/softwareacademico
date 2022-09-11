import React from 'react';
import { Link } from 'react-router-dom';
import { useIsAuth } from '../../context/authContext';
import { useShow } from '../../context/customerContext';
import './aside.css';
import PhotoContainer from './photo';

const AsideMenu = () => {
  const isAuth = useIsAuth();
  const show = useShow();

  return (
    isAuth &&
    show && (
      <aside className="aside-container">
        <>
          <PhotoContainer />
          <h1>Menu</h1>
          <Link to="/">Inicio</Link>
          <Link to="/clients">Consulta Clientes</Link>
        </>
      </aside>
    )
  );
};

export default AsideMenu;
