import React from 'react';
import ButtonActions from '../../components/clients/buttonAction/consult';
import SearchComponent from '../../components/clients/searchBar/searchComponent';
import TableClients from '../../components/clients/tableClients/tableClients';
import Title from '../../components/clients/title';
import { useNavigate } from 'react-router-dom';
import './viewClients.css';

const ViewClients = () => {
  const navigate = useNavigate();
  const toFormCreate = () => {
    navigate('/createClient');
  };

  return (
    <div className="view-clients-container">
      <div className="title-container">
        <Title title="Consulta de clientes" />
        <ButtonActions btn1="Agregar" btn2="Regresar" fn={toFormCreate} />
      </div>
      <div className="search-container">
        <SearchComponent />
      </div>
      <div className="table-container">
        <TableClients />
      </div>
    </div>
  );
};

export default ViewClients;
