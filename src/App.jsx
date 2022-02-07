import React from 'react';
import { connect } from 'react-redux';
import * as charactersActions from './actions/charactersActions';
import Header from './components/Header';
import Filters from './components/Filters';
import Favorites from './components/Favorites';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';

import './styles/App.css';

const App = (props) => {
  const { fetchCharacters, interactionReducer } = props;
  const { showFavorites } = interactionReducer;

  React.useEffect(async () => {
    await fetchCharacters();
  }, []);

  return (
    <div className={`app ${showFavorites && 'stop-scrolling'}`}>
      <Header />
      <Filters />
      {showFavorites && <Favorites />}
      <CardsContainer />
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ charactersReducer, interactionReducer }) => ({
  charactersReducer,
  interactionReducer,
});

const mapDispatchToProps = {
  ...charactersActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
