import { combineReducers } from 'redux';
import button from './button';
import checkbox from './checkbox';
import editBox from './editBox';

const rootReducer = combineReducers({
  button,
  checkbox,
  editBox
});

export default rootReducer;