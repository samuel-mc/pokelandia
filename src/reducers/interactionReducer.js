const INITIAL_STATE = {
  searchParam: '',
  likedCharacters: [],
  showFavorites: false,
  sortBy: 'default',
  order: 'asc',
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SEARCH_PARAMS':
      return {
        ...state,
        searchParam: action.payload,
      };
    case 'ADD_TO_LIKED_CHARACTERS':
      return {
        ...state,
        likedCharacters: [...state.likedCharacters, action.payload],
      };
    case 'REMOVE_FROM_LIKED_CHARACTERS':
      return {
        ...state,
        likedCharacters: state.likedCharacters.filter(
          (character) => character.id !== action.payload
        ),
      };
    case 'TOGGLE_FAVORITES':
      return {
        ...state,
        showFavorites: !state.showFavorites,
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    case 'SET_ORDER':
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
