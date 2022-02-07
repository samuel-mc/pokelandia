import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import '../styles/CardsContainer.css';

// Componente que se renderiza si ningun resultado coincide con la búsqueda.
const EmptyContainer = ({ searchParam }) => (
  <main className="container__empty padding">
    <h2>¡No hay personajes que se llamen {searchParam} !</h2>
    <h3>Prueba con otro nombre.</h3>
  </main>
);

// Componente que se renderiza si existe un error en la consulta.
const ErrorContainer = () => (
  <main className="container__error padding">
    <h2>¡Algo salió mal!</h2>
  </main>
);

// Componente que se renderiza mientras se cargan los personajes.
const ChargingContainer = () => (
  <main className="container__charging">
    <div className="pokeball">
      <div className="pokeball__button" />
    </div>
    <h2>Cargando...</h2>
  </main>
);

const CardsContainer = (props) => {
  const { charactersReducer, interactionReducer } = props;
  const { characters, loading, error } = charactersReducer;
  const { searchParam } = interactionReducer;

  // De acuerdo al parametro de búsqueda, se filtran los resultados que coincidad con .
  const filtered = React.useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(searchParam.toLowerCase())
      ),
    [characters, searchParam]
  );

  return (
    <>
      {/* Se renderiza el componente correspondiente si existe un error, loading, es vacio o ninguno de ellos. */}
      {filtered.length === 0 ? (
        <>
          {loading && <ChargingContainer />}
          {error && <ErrorContainer />}
          {!loading && !error && <EmptyContainer searchParam={searchParam} />}
        </>
      ) : (
        <main className="cards-container padding">
          {filtered.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = ({ charactersReducer, interactionReducer }) => ({
  charactersReducer,
  interactionReducer,
});

export default connect(mapStateToProps)(CardsContainer);
