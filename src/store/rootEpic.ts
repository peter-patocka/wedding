import { combineEpics } from 'redux-observable';
import guestsEpic from './guests/epics';

export const rootEpic = combineEpics(...guestsEpic);
