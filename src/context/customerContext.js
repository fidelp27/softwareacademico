import React, { createContext, useContext, useEffect, useState } from 'react';
import { getClients, getInterest } from '../helpers';
export const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [interest, setInterest] = useState([]);
  const [clients, setClients] = useState([]);
  const [show, setShow] = useState(false);
  const [filterClients, setFilterClients] = [];
  const [searchClient, setSearchClient] = useState('');

  const renderClients = async () => {
    try {
      const res = await getClients();
      return setClients(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInterest(setInterest);
  }, []);

  useEffect(() => {
    renderClients();
  }, []);

  return (
    <CustomerContext.Provider
      value={{ interest, clients, renderClients, show, setShow }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export function useInterest() {
  return useContext(CustomerContext).interest;
}
export function useClients() {
  return useContext(CustomerContext).clients;
}
export function useRenderClients() {
  return useContext(CustomerContext).renderClients;
}
export function useShow() {
  return useContext(CustomerContext).show;
}
export function useSetShow() {
  return useContext(CustomerContext).setShow;
}

export default CustomerProvider;
