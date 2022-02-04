const INITIAL_STATE = {
  searchParam: '',
  likedCharacters: [],
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
    default:
      return state;
  }
};
