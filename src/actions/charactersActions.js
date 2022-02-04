import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
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
