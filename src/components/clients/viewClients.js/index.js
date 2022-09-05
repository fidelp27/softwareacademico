import React from 'react';
import ButtonActions from '../buttonAction/consult';
import SearchComponent from '../searchBar/searchComponent';
import TableClients from '../tableClients/tableClients';
import Title from '../title';
import './viewClients.css';

const ViewClients = () => {
  return (
    <div className="view-clients-container">
      <div className="title-container">
        <Title title="Consulta de clientes" />
        <ButtonActions btn1="Agregar" btn2="Regresar" />
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
