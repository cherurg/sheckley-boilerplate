import {
  SLIDER_SLIDE,
  SLIDER_SET
} from 'constants/sliderActions';
import store from 'store';
let dispatch = store.dispatch;

export function sliderSlide(id, value) {
  return {
    type: SLIDER_SLIDE,
    id,
    value
  };
}
export let bindSliderSlide = (id) => dispatch(sliderSlide(id));


export function sliderSet(id, value) {
  return {
    type: SLIDER_SET,
    id,
    value
  };
}
export let bindSliderSet = (id) => dispatch(sliderSet(id));