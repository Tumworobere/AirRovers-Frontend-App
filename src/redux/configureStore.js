import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import planeReducer from './airplanes/airplanes';
import detailsReducer from './details/details';

const reducer = combineReducers({
  planeReducer,
  detailsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
