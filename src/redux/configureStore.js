import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import planeReducer from './airplanes/airplanes';
import detailsReducer from './details/details';
import reservationsReducer from './reservations/reservations';

const rootReducer = combineReducers({
  airplanes: planeReducer,
  reservations: reservationsReducer,
  details: detailsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
