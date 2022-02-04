import React from 'react';
import '../styles/Filters.css';

const Filters = () => {
  return (
    <div className="filters padding">
      <p>Ordenar por: </p>
      <button type="button">Nombre</button>
      <button type="button">Poder</button>
      <button type="button">Debilidad</button>
      <button type="button">Peso</button>
    </div>
  );
};

export default Filters;
