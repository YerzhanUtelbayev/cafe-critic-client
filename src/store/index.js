import {
  compose, combineReducers, applyMiddleware, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import usersReducer from './reducers/users';
import placesReducer from './reducers/places';
import watchSagas from './sagas/sagas';
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from './localStorage';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  places: placesReducer,
  users: usersReducer,
  router: connectRouter(history),
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware(history)];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadStateFromLocalStorage();

export const store = createStore(rootReducer, persistedState, enhancers);

// store.subscribe(() => {
//   saveStateToLocalStorage({
//     users: {
//       user: store.getState().users.user,
//     },
//   });
// });

sagaMiddleware.run(watchSagas);
