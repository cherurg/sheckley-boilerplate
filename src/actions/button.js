import {BUTTON_DOWN, BUTTON_UP, BUTTON_ADD, BUTTON_REMOVE} from 'constants/buttonActions';
import {dispatch} from 'store';

export function buttonDown(id) {
  return {
    type: BUTTON_DOWN,
    id
  };
}
export let bindButtonDown = (id) => dispatch(buttonDown(id));


export function buttonUp(id) {
  return {
    type: BUTTON_UP,
    id
  };
}
export let bindButtonUp = (id) => dispatch(buttonUp(id));


export function addButton(id) {
  return {
    type: BUTTON_ADD,
    id
  };
}
export let bindButtonAdd = (id) => dispatch(addButton(id));


export function buttonRemove() {
  return {
    type: BUTTON_REMOVE,
    id
  };
}
export let bindButtonRemove = (id) => dispatch(buttonRemove(id));