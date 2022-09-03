import { CapsulesAction, CapsulesActionTypes, CapsulesState } from "../../types/Capsules";

const capsulesInitialState: CapsulesState = {
    capsules: [],
    capsulesLoading: false,
    error: null,
}

export const capsulesReducer = (state = capsulesInitialState, action: CapsulesAction): CapsulesState => {
    switch (action.type) {
        case CapsulesActionTypes.FETCH_CAPSULES:
            return {capsulesLoading: true, error: null, capsules: []};
        case CapsulesActionTypes.FETCH_CAPSULES_SUCCESS:
            return {capsulesLoading: false, error: null, capsules: action.payload};
        case CapsulesActionTypes.FETCH_CAPSULES_ERROR:
            return {capsulesLoading: false, error: action.payload, capsules: []};    
        default:
            return state;
    }
}