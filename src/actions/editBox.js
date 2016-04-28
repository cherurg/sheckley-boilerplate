import {
  EDIT_BOX_ADD,
  EDIT_BOX_REMOVE,
  EDIT_BOX_PLUS,
  EDIT_BOX_MINUS,
  EDIT_BOX_INPUT,
  EDIT_BOX_STEP_CHANGE
} from 'constants/editBoxActions';
import store from 'store';
let dispatch = store.dispatch;

export function editBoxPlus(id) {
  return {
    type: EDIT_BOX_PLUS,
    id
  };
}
export let bindEditBoxPlus = (id) => dispatch(editBoxPlus(id));


export function editBoxMinus(id) {
  return {
    type: EDIT_BOX_MINUS,
    id
  };
}
export let bindEditBoxMinus = (id) => dispatch(editBoxMinus(id));


export function editBoxInput(id, value) {
  return {
    type: EDIT_BOX_INPUT,
    id,
    value
  };
}
export let bindEditBoxInput = (id, value) => dispatch(editBoxInput(id, value));


export function editBoxStepChange(id, step) {
  return {
    type: EDIT_BOX_STEP_CHANGE,
    id,
    step
  };
}
export let bindEditBoxStepChange = (id, newStep) => dispatch(editBoxStepChange(id, newStep));


export function addEditBox(id, value, step) {
  return {
    type: EDIT_BOX_ADD,
    id,
    value,
    step
  };
}
export let bindEditBoxAdd = (id, value, step) => dispatch(addEditBox(id, value, step));


export function editBoxRemove() {
  return {
    type: EDIT_BOX_REMOVE,
    id
  };
}
export let bindEditBoxRemove = (id) => dispatch(editBoxRemove(id));