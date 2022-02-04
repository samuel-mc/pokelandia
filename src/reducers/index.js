import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import interactionReducer from './interactionReducer';

export default combineReducers({
  charactersReducer,
  interactionReducer,
});
