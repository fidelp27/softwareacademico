import React from 'react';
import Title from '../clients/title';
import FormCreateClient from '../maintenance';

import './createClient.css';

const CreateClients = () => {
  return (
    <div className="view-clients-container">
      <div className="title-container">
        <Title title="Mantenimiento de clientes" />
      </div>

      <div className="table-container">
        <FormCreateClient />
      </div>
    </div>
  );
};
export default CreateClients;
