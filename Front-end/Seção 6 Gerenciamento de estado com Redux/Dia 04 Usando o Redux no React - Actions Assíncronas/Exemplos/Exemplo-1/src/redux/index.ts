import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import dogReducer from './reducer/dogReducer';

const store = legacy_createStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;