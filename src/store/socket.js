import {getSocket, getType} from 'utils/overContainer';

export default store => next => action => {
  if (getType() === 'sender') {
    getSocket().emit('plot-action', action);
  }
  next(action);
};