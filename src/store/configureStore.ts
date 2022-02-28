import { compose, createStore, applyMiddleware, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './rootEpic';
import createRootReducer from './rootReducer';
import { HashHistory } from 'history';
import { ApplicationState } from '../types/applicationState';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (history: HashHistory): Store<ApplicationState> => {
  const epicMiddleware = createEpicMiddleware();
  const middleWares = [epicMiddleware, routerMiddleware(history)];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true });
    middleWares.push(logger);
  }
  const store = createStore(
    createRootReducer(history),
    // initialState,
    composeEnhancers(applyMiddleware(...middleWares)),
  );
  epicMiddleware.run(rootEpic as any);
  return store;
};

export default configureStore;
