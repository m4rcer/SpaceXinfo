import { LaunchesAction, LaunchesState, LaunchesActionTypes } from "../../types/Launches";

const initialState: LaunchesState = {
    launches: [],
    loading: false,
    error: null,
}

export const launchesReducer = (state = initialState, action: LaunchesAction): LaunchesState => {
    switch (action.type) {
        case LaunchesActionTypes.FETCH_LAUNCHES:
            return {loading: true, error: null, launches: []};
        case LaunchesActionTypes.FETCH_LAUNCHES_SUCCESS:
            return {loading: false, error: null, launches: action.payload};
        case LaunchesActionTypes.FETCH_LAUNCHES_ERROR:
            return {loading: false, error: action.payload, launches: []};    
        default:
            return state;
    }
}