import {EventEmitter} from 'events';

export let emitter = new EventEmitter();
export let ACTION = 'plot-action';
export default store => next => action => {
  emitter.emit(ACTION, action);
  next(action);
};