import axios from 'axios';

export const fetchCharacters = () => async (dispatch) => {
  let characters = [];
  dispatch({
    type: 'FETCH_CHARACTERS_START',
  });
  try {
    // Llamada a la API, para obtener el nombre y el url
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    characters = response.data.results;
    // Iteración a cada elemento del arreglo de resultados para obtener los datos completos
    const charactersAux = await Promise.all(
      characters.map(async (character) => {
        const res = await axios.get(character.url);
        return res.data;
      })
    );

    dispatch({
      type: 'FETCH_CHARACTERS_SUCCESS',
      payload: charactersAux,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_CHARACTERS_FAILURE',
      payload: error.message,
    });
  }
};

export const sortCharacters = (orderBy) => (dispatch) => {
  console.log(orderBy);
  switch (orderBy) {
    case 'name':
      dispatch({
        type: 'SORT_BY_NAME',
      });
      break;
    case 'exp':
      dispatch({
        type: 'SORT_BY_EXP',
      });
      break;
    case 'weight':
      dispatch({
        type: 'SORT_BY_WEIGHT',
      });
      break;
    case 'height':
      dispatch({
        type: 'SORT_BY_HEIGHT',
      });
      break;
    case 'default':
      dispatch({
        type: 'SORT_BY_DEFAULT',
      });
      break;
    default:
      break;
  }
};
