// import { ActionsObservable } from 'redux-observable';
// import { of, from } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import {
  FETCH_ERROR,
  GuestsActionTypes,
  GuestsFetchErrorAction,
  GuestsReceiveAction,
  GuestsRequestAction,
  RECEIVE,
  REQUEST,
} from './actions';
import { Guest } from "../../types/entity/Guest";
import { Api } from "../../app/api";
import { ApplicationState } from "../../types/applicationState";

export const fetchGuests = (invitationCode: string): GuestsRequestAction => ({
  type: REQUEST,
  payload: invitationCode,
});

export const onFetchGuestsSuccess = (guests: Guest[]): GuestsReceiveAction => ({
  type: RECEIVE,
  payload: guests,
});

const onFetchGuestsError = (error: any): GuestsFetchErrorAction => ({
  type: FETCH_ERROR,
  payload: error,
  error: true,
});

export const fetchGuestsEpic: Epic<GuestsActionTypes, GuestsRequestAction, ApplicationState> = action$ => action$.pipe(
    ofType(REQUEST),
    mergeMap((action: GuestsRequestAction) =>
        Api.acceptInvitation(action.payload)
            .then(data => onFetchGuestsSuccess(data))
            .catch(error => onFetchGuestsError(error))
    ),
);

export default [fetchGuestsEpic];
