import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import socketMiddleware from './socket';
import ee from './eventer';

const finalCreateStore = compose(
  applyMiddleware(
    socketMiddleware,
    ee,
    createLogger()
  )
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}