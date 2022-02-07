import React from 'react';
import { connect } from 'react-redux';
import * as charactersActions from '../actions/charactersActions';
import * as interactionActions from '../actions/interactionActions';

import '../styles/Filters.css';

const Filters = (props) => {
  const { sortCharacters, setSortBy } = props;

  const handleClick = (mode) => {
    sortCharacters(mode);
    setSortBy(mode);
  };
  return (
    <div className="filters padding">
      <p>Ordenar por: </p>
      <button
        type="button"
        onClick={() => {
          handleClick('name');
        }}
      >
        Nombre
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick('exp');
        }}
      >
        Experiencia
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick('weight');
        }}
      >
        Peso
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick('height');
        }}
      >
        Altura
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick('default');
        }}
      >
        Default
      </button>
    </div>
  );
};

const mapStateToProps = ({ charactersReducer, interactionReducer }) => ({ charactersReducer, interactionReducer });

const mapDispatchToProps = {
  ...charactersActions,
  ...interactionActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
