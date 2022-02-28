import { FETCH_ERROR, RECEIVE, REQUEST, GuestsActionTypes } from './actions';
import { Reducer } from 'redux';
import { GuestsState, toGuestsPayload } from './types';

export const reducer: Reducer<GuestsState, GuestsActionTypes> = (
  state: GuestsState = { isFetching: false, data: [] },
  action: GuestsActionTypes,
): GuestsState => {
  switch (action.type) {
    case REQUEST:
      return { ...state, isFetching: true, data: [] };
    case RECEIVE:
      return {
        ...state,
        isFetching: false,
        data: toGuestsPayload(action.payload),
      };
    case FETCH_ERROR:
      return { ...state, isFetching: true, data: [], error: action?.payload?.message };
    default:
      return state;
  }
};

export default reducer;
