import {
  EDIT_BOX_ADD,
  EDIT_BOX_REMOVE,
  EDIT_BOX_PLUS,
  EDIT_BOX_MINUS,
  EDIT_BOX_STEP_CHANGE,
  EDIT_BOX_INPUT
} from 'constants/editBoxActions';
import assign from 'object-assign';

export default function editBox(state = [], action) {
  switch (action.type) {
    case EDIT_BOX_PLUS:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {value: item.value + step}) :
          item
      );

    case EDIT_BOX_MINUS:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {value: item.value - step}) :
          item
      );

    case EDIT_BOX_REMOVE:
      return state.filter(item => item.id !== action.id);

    case EDIT_BOX_ADD:
      return [
        ...state,
        {
          id: action.id,
          step: action.step || 1,
          value: action.value || 0
        }
      ];

    case EDIT_BOX_INPUT:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {value: action.value}) :
          item
      );

    case EDIT_BOX_STEP_CHANGE:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {step: action.step}) :
          item
      );

    default:
      return state;
  }
}