import {
  CHECKBOX_ENABLE,
  CHECKBOX_DISABLE,
  CHECKBOX_ADD,
  CHECKBOX_REMOVE
} from 'constants/checkboxActions';
import assign from 'object-assign';

export default function checkbox(state = [], action) {
  switch (action.type) {
    case CHECKBOX_ENABLE:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {isChecked: true}) :
          item
      );

    case CHECKBOX_DISABLE:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {isChecked: false}) :
          item
      );

    case CHECKBOX_REMOVE:
      return state.filter(item => item.id !== action.id);

    case CHECKBOX_ADD:
      return [
        ...state,
        {
          id: action.id,
          isChecked: false
        }
      ];

    default:
      return state;
  }
}