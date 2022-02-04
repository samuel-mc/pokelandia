import React from 'react';
import { connect } from 'react-redux';
import * as interacionActions from '../actions/interactionActions';
import '../styles/Favorites.css';

const Favorites = (props) => {
  const { interactionReducer, removeFromLikedCharacters, toggleFavorites } =
    props;
  const { likedCharacters } = interactionReducer;

  const handleRemove = (character) => {
    removeFromLikedCharacters(character.id);
  };

  const handleToggleFavorites = () => {
    toggleFavorites();
  };

  return (
    <aside className="favorites">
      <header>
        <h2>Favoritos</h2>
        <button type="button" onClick={() => handleToggleFavorites()}>
          x
        </button>
      </header>
      <ul>
        {likedCharacters.map((character) => (
          <li key={character.id}>
            <img
              src={character.sprites.other.dream_world.front_default}
              alt=""
            />
            <p>{character.name}</p>
            <button type="button" onClick={() => handleRemove(character)}>
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash"
                  className="svg-inline--fa fa-trash"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M53.21 467c1.562 24.84 23.02 45 47.9 45h245.8c24.88 0 46.33-20.16 47.9-45L416 128H32L53.21 467zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z"
                  />
                </svg>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const mapStateToProps = ({ interactionReducer }) => ({ interactionReducer });
const mapDispatchToProps = {
  ...interacionActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
