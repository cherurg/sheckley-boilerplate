import {
  DROP_DOWN_ADD,
  DROP_DOWN_REMOVE,
  DROP_DOWN_DROP,
  DROP_DOWN_COLLAPSE,
  DROP_DOWN_MOUSE_OVER,
  DROP_DOWN_MOUSE_OUT,
  DROP_DOWN_SELECT
} from '../constants/dropDownActions';
import assign from 'object-assign';

export default function editBox(state = [], action) {
  switch (action.type) {

    case DROP_DOWN_DROP:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {dropped: true}) :
          item
      );

    case DROP_DOWN_COLLAPSE:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {dropped: false}) :
          item
      );

    case DROP_DOWN_MOUSE_OVER:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {mouseOver: action.itemIndex}) :
          item
      );

    case DROP_DOWN_MOUSE_OUT:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {mouseOver: null}) :
          item
      );

    case DROP_DOWN_SELECT:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {selected: action.itemIndex}) :
          item
      );

    case DROP_DOWN_REMOVE:
      return state.filter(item => item.id !== action.id);

    case DROP_DOWN_ADD:
      return [
        ...state,
        {
          id: action.id,
          selected: action.selected,
          mouseOver: null,
          dropped: false
        }
      ];

    default:
      return state;
  }
}