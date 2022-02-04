export const setSearchParam = (param) => (dispatch) => {
  dispatch({
    type: 'SET_SEARCH_PARAMS',
    payload: param,
  });
};

export const clearSearchParam = () => (dispatch) => {
  dispatch({
    type: 'SET_SEARCH_PARAMS',
    payload: '',
  });
};

export const addToLikedCharacters = (character) => (dispatch) => {
  dispatch({
    type: 'ADD_TO_LIKED_CHARACTERS',
    payload: character,
  });
};

export const removeFromLikedCharacters = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_FROM_LIKED_CHARACTERS',
    payload: id,
  });
}

