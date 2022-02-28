import { Action } from 'redux';

export interface CustomAction<P> extends Action<string> {
  payload?: P;
  error?: boolean;
}
