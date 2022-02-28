import { Guest } from "../../types/entity/Guest";

export function toGuestsPayload(data: any): Guest[] {
  return data;
}

export interface GuestsState {
  isFetching: boolean;
  data: Guest[];
  error?: string;
}
