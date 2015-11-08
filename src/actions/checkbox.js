import {
  CHECKBOX_ENABLE,
  CHECKBOX_DISABLE,
  CHECKBOX_ADD,
  CHECKBOX_REMOVE
} from 'constants/checkboxActions';
import store from 'store';
let dispatch = store.dispatch;

export function checkboxEnable(id) {
  return {
    type: CHECKBOX_ENABLE,
    id
  };
}
export let bindCheckboxEnable= (id) => dispatch(checkboxEnable(id));


export function checkboxDisable(id) {
  return {
    type: CHECKBOX_DISABLE,
    id
  };
}
export let bindCheckboxDisable = (id) => dispatch(checkboxDisable(id));


export function addCheckbox(id) {
  return {
    type: CHECKBOX_ADD,
    id
  };
}
export let bindCheckboxAdd = (id) => dispatch(addCheckbox(id));


export function checkboxRemove() {
  return {
    type: CHECKBOX_REMOVE,
    id
  };
}
export let bindCheckboxRemove = (id) => dispatch(checkboxRemove(id));