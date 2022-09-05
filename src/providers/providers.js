import React from 'react';
import AuthProvider from '../context/authContext';
import CustomerProvider from '../context/customerContext';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <CustomerProvider>{children}</CustomerProvider>
    </AuthProvider>
  );
};
export default Providers;
