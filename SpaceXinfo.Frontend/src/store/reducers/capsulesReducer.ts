import { CapsulesAction, CapsulesActionTypes, CapsulesState } from "../../types/Capsules";

const capsulesInitialState: CapsulesState = {
    capsules: [],
    loading: false,
    error: null,
}

export const capsulesReducer = (state = capsulesInitialState, action: CapsulesAction): CapsulesState => {
    switch (action.type) {
        case CapsulesActionTypes.FETCH_CAPSULES:
            return {loading: true, error: null, capsules: []};
        case CapsulesActionTypes.FETCH_CAPSULES_SUCCESS:
            return {loading: false, error: null, capsules: action.payload};
        case CapsulesActionTypes.FETCH_CAPSULES_ERROR:
            return {loading: false, error: action.payload, capsules: []};    
        default:
            return state;
    }
}