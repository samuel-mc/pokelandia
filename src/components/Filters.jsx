import React from 'react';
import { connect } from 'react-redux';
import * as charactersActions from '../actions/charactersActions';
import * as interactionActions from '../actions/interactionActions';

import '../styles/Filters.css';

const Filters = (props) => {
  const { sortCharacters, setSortBy, setOrder, interactionReducer } = props;
  const { sortBy, order } = interactionReducer;

  // Función que maneja el click en los botones, modificando la forma en que se ordenan los personajes
  const handleClick = (mode) => {
    let newOrder = null;
    if (mode === sortBy) {
      newOrder = order === 'asc' ? 'desc' : 'asc';
    } else {
      newOrder = 'asc';
    }
    setOrder(newOrder);
    setSortBy(mode);
    sortCharacters(mode, newOrder);
  };

  const arrowStyle = (mode) => {
    if (mode === sortBy) {
      return order === 'asc' ? '▼' : '▲';
    }
    return '';
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
        Nombre {arrowStyle('name')}
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick('exp');
        }}
      >
        Experiencia {arrowStyle('exp')}
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick('weight');
        }}
      >
        Peso {arrowStyle('weight')}
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick('height');
        }}
      >
        Altura {arrowStyle('height')}
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

const mapStateToProps = ({ charactersReducer, interactionReducer }) => ({
  charactersReducer,
  interactionReducer,
});

const mapDispatchToProps = {
  ...charactersActions,
  ...interactionActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
