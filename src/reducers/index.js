import { combineReducers } from 'redux';
import button from './button';
import checkbox from './checkbox';
import editBox from './editBox';
import slider from './slider';

const rootReducer = combineReducers({
  button,
  checkbox,
  editBox,
  slider
});

export default rootReducer;