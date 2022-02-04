import React from 'react';
import { connect } from 'react-redux';
import * as charactersActions from './actions/charactersActions';
import Header from './components/Header';
import Filters from './components/Filters';
import CardsContainer from './components/CardsContainer';

import './styles/App.css';

const App = (props) => {
  const { fetchCharacters } = props;

  React.useEffect(async () => {
    await fetchCharacters();
  }, []);

  return (
    <div className="app">
      <Header />
      <Filters />
      <CardsContainer />
    </div>
  );
};

const mapStateToProps = ({ charactersReducer }) => ({ charactersReducer });

const mapDispatchToProps = {
  ...charactersActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
