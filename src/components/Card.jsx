import React from 'react';
import { connect } from 'react-redux';
import * as interacionActions from '../actions/interactionActions';

import '../styles/Card.css';

const Card = (props) => {
  const {
    addToLikedCharacters,
    interactionReducer,
    removeFromLikedCharacters,
    character,
  } = props;
  const { likedCharacters, sortBy } = interactionReducer;
  const isLiked = likedCharacters.includes(character);

  const [isShowingMore, setIsShowingMore] = React.useState(false); // Estados que controlan la visibilidad de los detalles de la carta

  // Funcion para mostrar / ocultar los detalles de la carta.
  const toggleMore = () => {
    setIsShowingMore(!isShowingMore);
  };

  //  Función que pone la primera letra en mayúscula.
  const firstUppercase = (word) =>
    word.split('')[0].toUpperCase() + word.slice(1);

  // Función para guardar los personajes favoritos.
  const handleSave = () => {
    if (isLiked) {
      removeFromLikedCharacters(character.id);
    } else {
      addToLikedCharacters(character);
    }
  };

  return (
    <div className="card">
      <div className="card__header">
        <h3>{character.name}</h3>
      </div>
      <button
        className="button__show-more"
        type="button"
        onClick={() => toggleMore()}
      >
        {!isShowingMore ? (
          <>
            <p>Ver más</p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="circle-down"
              className="svg-inline--fa fa-circle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M344 240h-56L287.1 152c0-13.25-10.75-24-24-24h-16C234.7 128 223.1 138.8 223.1 152L224 240h-56c-9.531 0-18.16 5.656-22 14.38C142.2 263.1 143.9 273.3 150.4 280.3l88.75 96C243.7 381.2 250.1 384 256.8 384c7.781-.3125 13.25-2.875 17.75-7.844l87.25-96c6.406-7.031 8.031-17.19 4.188-25.88S353.5 240 344 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
              />
            </svg>
          </>
        ) : (
          <>
            <p>Ver menos</p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="circle-up"
              className="svg-inline--fa fa-circle-up"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M272.9 135.7C268.3 130.8 261.9 128 255.2 128C247.5 128.3 241.1 130.9 237.5 135.8l-87.25 96C143.8 238.9 142.2 249 146.1 257.7C149.9 266.4 158.5 272 167.1 272h56L224 360c0 13.25 10.75 24 24 24h16c13.25 0 23.1-10.75 23.1-24L287.1 272h56c9.531 0 18.16-5.656 22-14.38c3.811-8.75 2.092-18.91-4.377-25.91L272.9 135.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
              />
            </svg>
          </>
        )}
      </button>
      <div className="card__body">
        <div className="card__image">
          <img
            src={character.sprites.other.dream_world.front_default}
            alt={character.name}
          />
        </div>
        <div
          className={`card__description ${isShowingMore ? 'show' : 'hide'} `}
        >
          <ul>
            <li>
              <span>Tipo: </span>
              {character.types
                .map((type) => firstUppercase(type.type.name))
                .join(', ')}
            </li>
            <li>
              <span>Habilidades: </span>
              {character.abilities
                .map((ability) => firstUppercase(ability.ability.name))
                .join(', ')}
            </li>
            <li>
              {' '}
              <span>Experiencia: </span>
              {character.base_experience}
            </li>
            <li>
              <span>Peso: </span>
              {character.weight}
            </li>
            <li>
              <span>Altura: </span>
              {character.height}
            </li>
          </ul>
          <div className="card__like">
            <button
              type="button"
              className="like__button"
              onClick={() => handleSave()}
            >
              <span>
                {!isLiked ? (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart"
                    className="svg-inline--fa fa-heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M462.1 62.86C438.8 41.92 408.9 31.1 378.7 32c-37.49 0-75.33 15.4-103 43.98l-19.7 20.27l-19.7-20.27C208.6 47.4 170.8 32 133.3 32C103.1 32 73.23 41.93 49.04 62.86c-62.14 53.79-65.25 149.7-9.23 207.6l193.2 199.7C239.4 476.7 247.6 480 255.9 480c8.332 0 16.69-3.267 23.01-9.804l193.1-199.7C528.2 212.5 525.1 116.6 462.1 62.86zM437.6 237.1l-181.6 187.8L74.34 237.1C42.1 203.8 34.46 138.1 80.46 99.15c39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92l54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C477.1 138.6 470.5 203.1 437.6 237.1z"
                    />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    className="svg-inline--fa fa-heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M472.1 270.5l-193.1 199.7c-12.64 13.07-33.27 13.08-45.91 .0107l-193.2-199.7C-16.21 212.5-13.1 116.7 49.04 62.86C103.3 15.88 186.4 24.42 236.3 75.98l19.7 20.27l19.7-20.27c49.95-51.56 132.1-60.1 187.3-13.12C525.1 116.6 528.2 212.5 472.1 270.5z"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>

        <footer className="card__footer">
          {sortBy === 'exp' && <h3>Experiencia: {character.base_experience}</h3>}
          {sortBy === 'weight' && <h3>Peso: {character.weight}</h3>}
          {sortBy === 'height' && <h3>Altura: {character.height}</h3>}
        </footer>
      </div>
    </div>
  );
};

const mapStateToProps = ({ interactionReducer }) => ({ interactionReducer });
const mapDispatchToProps = {
  ...interacionActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
