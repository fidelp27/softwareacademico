import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
export const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  // const [clients, setClients] = useState([]);

  // const getClients = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_ENDPOINT}api/Intereses/Listado`)
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   getClients();
  // }, []);

  return (
    <CustomerContext.Provider value={{}}>{children}</CustomerContext.Provider>
  );
};

// export function useClients() {
//   return useContext(CustomerContext).clients;
// }
export default CustomerProvider;
