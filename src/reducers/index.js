import { combineReducers } from 'redux';
import button from './button';
import checkbox from './checkbox';

const rootReducer = combineReducers({
  button,
  checkbox
});

export default rootReducer;