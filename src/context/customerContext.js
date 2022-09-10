import React, { createContext, useContext, useEffect, useState } from 'react';
import { getClient, getClients } from '../helpers';
import { useResize } from '../hook/useResize';
import { useNavigate } from 'react-router-dom';
export const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [interest, setInterest] = useState([]);
  const [show, setShow] = useState(true);
  const [clients, setClients] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [searchClient, setSearchClient] = useState({
    nombre: '',
    identificacion: '',
  });
  const [dataClient, setDataClient] = useState(null);
  const { isPhone } = useResize();
  const navigate = useNavigate();

  const renderClients = () => {
    getClients()
      .then((resp) => setRenderList(resp))
      .then((res) => setClients(res))
      .catch((error) => error);
  };

  const getDataClient = (id) => {
    getClient(id)
      .then((resp) => setDataClient(resp))
      .then(() => navigate('/modifyClient'));
  };

  useEffect(() => {
    if (searchClient.nombre || searchClient.identificacion) {
      setRenderList(
        renderList.filter(
          (elem) =>
            elem.nombre.toLowerCase().startsWith(searchClient.nombre) ||
            elem.identificacion.startsWith(searchClient.identificacion)
        )
      );
    } else if (
      searchClient.nombre === '' ||
      searchClient.identificacion === ''
    ) {
      setRenderList(clients);
    }
  }, [searchClient]);

  useEffect(() => {
    !isPhone && setShow(true);
  }, [isPhone]);

  return (
    <CustomerContext.Provider
      value={{
        interest,
        setInterest,
        show,
        setShow,
        renderList,
        setSearchClient,
        renderClients,
        getDataClient,
        dataClient,
        setDataClient,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export function useInterest() {
  return useContext(CustomerContext).interest;
}
export function useSetInterest() {
  return useContext(CustomerContext).setInterest;
}
export function useClients() {
  return useContext(CustomerContext).clients;
}
export function useRenderList() {
  return useContext(CustomerContext).renderList;
}
export function useShow() {
  return useContext(CustomerContext).show;
}
export function useSetShow() {
  return useContext(CustomerContext).setShow;
}
export function useSetSearchClient() {
  return useContext(CustomerContext).setSearchClient;
}
export function useRenderClients() {
  return useContext(CustomerContext).renderClients;
}
export function useGetDataClient() {
  return useContext(CustomerContext).getDataClient;
}

export function useDataClient() {
  return useContext(CustomerContext).dataClient;
}
export function useSetDataClient() {
  return useContext(CustomerContext).setDataClient;
}

export default CustomerProvider;
