import {SLIDER_SLIDE, SLIDER_SET, SLIDER_ADD, SLIDER_REMOVE} from 'constants/sliderActions';
import assign from 'object-assign';

export default function slider(state = [], action) {
  switch (action.type) {
    case SLIDER_SET:
    case SLIDER_SLIDE:
      return state.map(item =>
        item.id === action.id ?
          assign({}, item, {value: action.value}) :
          item
      );

    case SLIDER_ADD:
      return [
        ...state,
        {
          id: action.id,
          value: action.start,
          min: action.min,
          max: action.max,
          step: action.step
        }
      ];

    case SLIDER_REMOVE:
      return state.filter(item => item.id !== action.id);

    default: return state;
  }
}