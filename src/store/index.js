import configureStore from './configureStore';
import {getSocket, getType} from 'utils/overContainer';

let store = configureStore();

setTimeout(() => {
  if (getType() === 'receiver') {
    getSocket().on('action', (action) => {
      store.dispatch(action);
    });
  }
}, 0);

export default store;