import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
export const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
<<<<<<< HEAD
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
=======
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

>>>>>>> 23ebe46 (add interest)
export default CustomerProvider;
