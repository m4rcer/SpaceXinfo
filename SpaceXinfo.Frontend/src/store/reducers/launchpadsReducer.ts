import { LaunchpadAction, LaunchpadActionTypes, LaunchpadState } from "../../types/Launchpads";

const launchpadInitialState: LaunchpadState = {
    launchpad: null,
    loading: false,
    error: null,
}

export const launchpadReducer = (state = launchpadInitialState, action: LaunchpadAction): LaunchpadState => {
    switch (action.type) {
        case LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID:
            return {loading: true, error: null, launchpad: null};
        case LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID_SUCCESS:
            return {loading: false, error: null, launchpad: action.payload};
        case LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID_ERROR:
            return {loading: false, error: action.payload, launchpad: null};    
        default:
            return state;
    }
}