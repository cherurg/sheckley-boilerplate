import {
  SLIDER_SLIDE,
  SLIDER_SET,
  SLIDER_ADD,
  SLIDER_REMOVE
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
export let bindSliderSlide = (id, value) => dispatch(sliderSlide(id, value));


export function sliderSet(id, value) {
  return {
    type: SLIDER_SET,
    id,
    value
  };
}
export let bindSliderSet = (id, value) => dispatch(sliderSet(id, value));


export function sliderAdd(id, props) {
  return {
    type: SLIDER_ADD,
    id,
    ...props
  };
}
export let bindSliderAdd = (id, props) => dispatch(sliderAdd(id, props));


export function sliderRemove(id) {
  return {
    type: SLIDER_REMOVE,
    id
  };
}
export let bindSliderRemove = (id) => dispatch(sliderRemove(id));
