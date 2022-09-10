import React from 'react';
import './alert.css';

const Alert = ({ nombre, fnOpen, fnClose }) => {
  return (
    <div className="container-alert">
      <h1>¿Deseas eliminar al usuario: {nombre} </h1>
      <button type="button" onClick={fnOpen}>
        Sí
      </button>
      <button type="button" onClick={fnClose}>
        No
      </button>
    </div>
  );
};
export default Alert;
