import { combineReducers, Reducer } from 'redux';
import guests from './guests/reducer';
import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { ApplicationState } from '../types/applicationState';

const createRootReducer = (
  history: BrowserHistory,
): Reducer<ApplicationState> =>
  combineReducers({
    guests: guests,
    router: connectRouter(history),
  });

export default createRootReducer;
