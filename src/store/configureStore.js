import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import socketMiddleware from './socket';

const finalCreateStore = compose(
  applyMiddleware(
    socketMiddleware,
    createLogger()
  )
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}