import {getSocket, getType} from 'utils/overContainer';

export default store => next => action => {
  if (getType() === 'sender') {
    getSocket().emit('action', action);
  }
  next(action);
};