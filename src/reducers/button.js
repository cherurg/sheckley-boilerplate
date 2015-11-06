import {BUTTON_DOWN, BUTTON_UP, BUTTON_ADD, BUTTON_REMOVE} from 'constants/buttonActions';
import assign from 'object-assign';

export default function button(state = [], action) {
  let itemIndex, s;

  switch (action.type) {
    case BUTTON_DOWN:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {isDown: true}) :
          item
      );

    case BUTTON_UP:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {isDown: false}) :
          item
      );

    case BUTTON_REMOVE:
      return state.filter(item => item.id !== action.id);

    case BUTTON_ADD:
      return [
        ...state,
        {
          id: action.id,
          isDown: false
        }
      ];

    default:
      return state;
  }
}