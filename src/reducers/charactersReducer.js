const INITIAL_STATE = {
  characters: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_CHARACTERS_SUCCESS':
      return {
        ...state,
        loading: false,
        characters: action.payload,
      };
    case 'FETCH_CHARACTERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // Ordenar por nombre de manera ascendente
    case 'SORT_BY_NAME_ASC':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }),
      };
    // Ordenar por nombre de manera descendente
    case 'SORT_BY_NAME_DESC':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        }),
      };
    // Ordenar por experiencia de manera ascendente
    case 'SORT_BY_EXP_ASC':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.base_experience < b.base_experience) return -1;
          if (a.base_experience > b.base_experience) return 1;
          return 0;
        }),
      };
    // Ordenar por experiencia de manera descendente
    case 'SORT_BY_EXP_DESC':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.base_experience > b.base_experience) return -1;
          if (a.base_experience < b.base_experience) return 1;
          return 0;
        }),
      };
    // Ordenar por peso de manera ascendente
    case 'SORT_BY_WEIGHT_ASC':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.weight < b.weight) return -1;
          if (a.weight > b.weight) return 1;
          return 0;
        }),
      };
    // Ordenar por peso de manera descendente
    case 'SORT_BY_WEIGHT_DESC':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.weight > b.weight) return -1;
          if (a.weight < b.weight) return 1;
          return 0;
        }),
      };
    // Ordenar por altura de manera ascendente
    case 'SORT_BY_HEIGHT_ASC':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.height < b.height) return -1;
          if (a.height > b.height) return 1;
          return 0;
        }),
      };
    // Ordenar por altura de manera descendente
    case 'SORT_BY_HEIGHT_DESC':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.height > b.height) return -1;
          if (a.height < b.height) return 1;
          return 0;
        }),
      };
    case 'SORT_BY_DEFAULT':
      return {
        ...state,
        characters: [...state.characters].sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        }),
      };
    default:
      return state;
  }
};
