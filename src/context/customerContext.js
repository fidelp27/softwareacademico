import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
export const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [interest, setInterest] = useState([]);

  const getInterest = () => {
    let config = {
      method: 'get',
      url: `${process.env.REACT_APP_API_ENDPOINT}api/Intereses/Listado`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    axios(config)
      .then(function (response) {
        setInterest(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getInterest();
  }, []);

  return (
    <CustomerContext.Provider value={{ interest }}>
      {children}
    </CustomerContext.Provider>
  );
};

export function useInterest() {
  return useContext(CustomerContext).interest;
}

export default CustomerProvider;
