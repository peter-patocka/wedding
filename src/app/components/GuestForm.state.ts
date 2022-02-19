import { Action } from "@reduxjs/toolkit";
import { Guest } from "../../types/entity/Guest";
import { Reducer, useReducer } from "react";

export enum GuestFormActionType {
    SAVE = 'SAVE',
}

interface GuestFormAction extends Action<GuestFormActionType> {
    type: GuestFormActionType;
    payload: Guest[];
}

interface GuestFormState {
    guests: Guest[];
}

export const initialState: GuestFormState = {
    guests: []
};

export function guestFormReducer(state: GuestFormState, action: GuestFormAction): GuestFormState {
    switch (action.type) {
        case GuestFormActionType.SAVE:
            return {
                ...state,
                guests: action.payload
            };
        default:
            return state;
    }
}