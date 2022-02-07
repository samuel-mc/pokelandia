import React from 'react';
import { connect } from 'react-redux';
import * as interacionActions from '../actions/interactionActions';

import logo from '../images/logo.png';

import '../styles/Header.css';

const Header = (props) => {
  const {
    interactionReducer,
    setSearchParam,
    clearSearchParam,
    toggleFavorites,
  } = props;
  const { searchParam, likedCharacters } = interactionReducer;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchParam(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    document.getElementById('searc__input').value = '';
    clearSearchParam();
  };

  const handleToggleFavorites = () => {
    toggleFavorites();
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <div className="header__search-bar">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="magnifying-glass"
          className="svg-inline--fa fa-magnifying-glass"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
          />
        </svg>
        <input
          id="searc__input"
          type="text"
          placeholder="Buscar personaje"
          onChange={(e) => handleChange(e)}
        />
        {searchParam.length > 0 && (
          <button
            type="button"
            className="button__clear"
            onClick={(e) => handleClear(e)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="xmark"
              className="svg-inline--fa fa-xmark"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="header__favs">
        <button
          type="button"
          className="button__favs"
          onClick={() => handleToggleFavorites()}
        >
          Tus Favoritos ({likedCharacters.length})
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-down"
              className="svg-inline--fa fa-angle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
              />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = ({ interactionReducer }) => ({ interactionReducer });
const mapDispatchToProps = {
  ...interacionActions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
