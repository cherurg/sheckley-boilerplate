import {
  DROP_DOWN_ADD,
  DROP_DOWN_REMOVE,
  DROP_DOWN_DROP,
  DROP_DOWN_COLLAPSE,
  DROP_DOWN_MOUSE_OVER,
  DROP_DOWN_MOUSE_OUT,
  DROP_DOWN_SELECT

} from 'constants/dropDownActions';
import store from 'store';
let dispatch = store.dispatch;


export function dropDownAdd(id, props) {
  return {
    type: DROP_DOWN_ADD,
    id,
    ...props
  };
}
export let bindDropDownAdd = (id, props) => dispatch(dropDownAdd(id, props));


export function dropDownRemove(id) {
  return {
    type: DROP_DOWN_REMOVE,
    id
  };
}
export let bindDropDownRemove = (id) => dispatch(dropDownRemove(id));


export function dropDownCollapse(id) {
  return {
    type: DROP_DOWN_COLLAPSE,
    id
  };
}
export let bindDropDownCollapse = (id) => dispatch(dropDownCollapse(id));


export function dropDownDrop(id) {
  return {
    type: DROP_DOWN_DROP,
    id
  };
}
export let bindDropDownDrop = (id) => dispatch(dropDownDrop(id));


export function dropDownMouseOver(id, itemIndex) {
  return {
    type: DROP_DOWN_MOUSE_OVER,
    id,
    itemIndex
  };
}
export let bindDropDownMouseOver = (id, itemIndex) => dispatch(dropDownMouseOver(id, itemIndex));


export function dropDownMouseOut(id) {
  return {
    type: DROP_DOWN_MOUSE_OUT,
    id
  };
}
export let bindDropDownMouseOut = (id) => dispatch(dropDownMouseOut(id));


export function dropDownSelect(id, itemIndex) {
  return {
    type: DROP_DOWN_SELECT,
    id,
    itemIndex
  };
}
export let bindDropDownSelect = (id, itemIndex) => dispatch(dropDownSelect(id, itemIndex));
