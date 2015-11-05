import {BUTTON_DOWN, BUTTON_UP, BUTTON_ADD, BUTTON_REMOVE} from 'constants/buttonActions';

export default function button(state = [], action) {
  let itemIndex, s;

  switch (action.type) {
    case BUTTON_DOWN:
      itemIndex = state.map(item => item.id).indexOf(action.id);
      s = state.slice();
      s[itemIndex].isDown = true;
      return s;
      break;

    case BUTTON_UP:
      itemIndex = state.map(item => item.id).indexOf(action.id);
      s = state.slice();
      s[itemIndex].isDown = false;
      return s;
      break;

    case BUTTON_REMOVE:
      let itemToRemove = state
        .map(item => item.id)
        .indexOf(action.id);
      return state.slice(0, itemToRemove)
        .concat(state.slice(itemToRemove + 1));
      break;

    case BUTTON_ADD:
      return state.slice().push({
        id: action.id,
        isDown: false
      });
      break;

    default:
      return state;
  }
}