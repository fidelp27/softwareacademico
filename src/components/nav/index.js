import React from 'react';
import { useIsAuth, useLogOut, useUser } from '../../context/authContext';
import './navbar.css';

const Navbar = () => {
  const logOut = useLogOut();
  const isAuth = useIsAuth();
  const user = useUser();

  return (
    <>
      <nav className="nav-container">
        {isAuth && (
          <>
            <h1>Empresa</h1>
            <div className="user-container">
              <p className="user-navbar">{user}</p>
              <img
                src="https://i.imgur.com/fxGxA4V.png"
                alt="salir"
                onClick={logOut}
              />
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
