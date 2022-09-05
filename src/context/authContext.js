import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const logOut = () => {
    setIsAuth(false);
    localStorage.clear();
    navigate('/login');
  };
  console.log(user);
  useEffect(() => {
    token && setIsAuth(true);
    localStorage.getItem('user') && setUser(localStorage.getItem('user'));
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuth, setIsAuth, logOut, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useUser() {
  return useContext(AuthContext).user;
}
export function useSetUser() {
  return useContext(AuthContext).setUser;
}
export function useIsAuth() {
  return useContext(AuthContext).isAuth;
}
export function useSetIsAuth() {
  return useContext(AuthContext).setIsAuth;
}

export function useSetToken() {
  return useContext(AuthContext).setToken;
}
export function useLogOut() {
  return useContext(AuthContext).logOut;
}

export default AuthProvider;
