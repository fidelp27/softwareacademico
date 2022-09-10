import React from 'react';
import { useIsAuth, useLogOut, useUser } from '../../context/authContext';
import { useSetShow, useShow } from '../../context/customerContext';
import { useResize } from '../../hook/useResize';
import './navbar.css';

const Navbar = () => {
  const logOut = useLogOut();
  const isAuth = useIsAuth();
  const user = useUser();
  const setShow = useSetShow();
  const show = useShow();
  const { isPhone } = useResize();

  return (
    <>
      <nav className="nav-container">
        {isAuth && (
          <>
            <img
              src="https://i.imgur.com/fqz0lxJ.png"
              alt="menu-hamburger"
              className="menu-icon"
              onClick={() => isPhone && setShow(!show)}
            />
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
