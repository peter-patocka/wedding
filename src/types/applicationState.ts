import { RouterState } from 'connected-react-router';
import { GuestsState } from '../store/guests/types';

export interface ApplicationState {
  guestState: GuestsState;
  router: RouterState;
}
