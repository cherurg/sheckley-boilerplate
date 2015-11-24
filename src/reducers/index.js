import { combineReducers } from 'redux';
import button from './button';
import checkbox from './checkbox';
import editBox from './editBox';
import slider from './slider';
import dropDown from './dropDown';

const rootReducer = combineReducers({
  button,
  checkbox,
  editBox,
  slider,
  dropDown
});

export default rootReducer;