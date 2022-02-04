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
