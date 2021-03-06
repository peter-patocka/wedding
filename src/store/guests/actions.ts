import { CustomAction } from '../../types/action';
import { CustomError } from '../../types/error';
import { Guest } from "../../types/entity/Guest";

export const REQUEST = 'REQUEST_GUESTS';
export const RECEIVE = 'RECEIVE_GUESTS';
export const FETCH_ERROR = 'FETCH_ERROR_GUESTS';

export interface GuestsRequestAction extends CustomAction<string> {
  type: typeof REQUEST;
  payload: string;
}

export interface GuestsReceiveAction extends CustomAction<Guest[]> {
  type: typeof RECEIVE;
}

export interface GuestsFetchErrorAction extends CustomAction<CustomError> {
  type: typeof FETCH_ERROR;
}

export type GuestsActionTypes =
  | GuestsRequestAction
  | GuestsReceiveAction
  | GuestsFetchErrorAction;
