import axios from 'axios';

// Funcion para obtener los personajes de la base de datos.
export const fetchCharacters = () => async (dispatch) => {
  let characters = [];
  dispatch({
    type: 'FETCH_CHARACTERS_START',
  });
  try {
    // Llamada a la API, para obtener el nombre y el url
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=28'
    );
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

// Funcion para modificar el orden en el que se muestran los personajes.
export const sortCharacters = (orderBy, order) => (dispatch) => {
  switch (orderBy) {
    case 'name':
      dispatch({
        type: order === 'asc' ? 'SORT_BY_NAME_ASC' : 'SORT_BY_NAME_DESC',
      });
      break;
    case 'exp':
      dispatch({
        type: order === 'asc' ? 'SORT_BY_EXP_ASC' : 'SORT_BY_EXP_DESC',
      });
      break;
    case 'weight':
      dispatch({
        type: order === 'asc' ? 'SORT_BY_WEIGHT_ASC' : 'SORT_BY_WEIGHT_DESC',
      });
      break;
    case 'height':
      dispatch({
        type: order === 'asc' ? 'SORT_BY_HEIGHT_ASC' : 'SORT_BY_HEIGHT_DESC',
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
