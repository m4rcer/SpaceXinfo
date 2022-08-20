import { LaunchAction, LaunchActionTypes, LaunchState, NextLaunchAction, NextLaunchActionTypes, NextLaunchState, PastLaunchesAction, PastLaunchesActionTypes, PastLaunchesState, UpcomingLaunchesAction, UpcomingLaunchesActionTypes, UpcomingLaunchesState } from "../../types/Launches";

const nextLaunchInitialState: NextLaunchState = {
    nextLaunch: null,
    loading: false,
    error: null,
}

const pastLaunchesInitialState: PastLaunchesState = {
    pastLaunches: [],
    loading: false,
    error: null,
}

const upcomingLaunchesInitialState: UpcomingLaunchesState = {
    upcomingLaunches: [],
    loading: false,
    error: null,
}

const launchInitialState: LaunchState = {
    launch: null,
    loading: false,
    error: null,
}

export const nextLaunchReducer = (state = nextLaunchInitialState, action: NextLaunchAction): NextLaunchState => {
    switch (action.type) {
        case NextLaunchActionTypes.FETCH_NEXT_LAUNCH:
            return {loading: true, error: null, nextLaunch: null};
        case NextLaunchActionTypes.FETCH_NEXT_LAUNCH_SUCCESS:
            return {loading: false, error: null, nextLaunch: action.payload};
        case NextLaunchActionTypes.FETCH_NEXT_LAUNCH_ERROR:
            return {loading: false, error: action.payload, nextLaunch: null};    
        default:
            return state;
    }
}

export const pastLaunchesReducer = (state = pastLaunchesInitialState, action: PastLaunchesAction): PastLaunchesState => {
    switch (action.type) {
        case PastLaunchesActionTypes.FETCH_PAST_LAUNCHES:
            return {loading: true, error: null, pastLaunches: []};
        case PastLaunchesActionTypes.FETCH_PAST_LAUNCHES_SUCCESS:
            return {loading: false, error: null, pastLaunches: action.payload};
        case PastLaunchesActionTypes.FETCH_PAST_LAUNCHES_ERROR:
            return {loading: false, error: action.payload, pastLaunches: []};    
        default:
            return state;
    }
}

export const upcomingLaunchesReducer = (state = upcomingLaunchesInitialState, action: UpcomingLaunchesAction): UpcomingLaunchesState => {
    switch (action.type) {
        case UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES:
            return {loading: true, error: null, upcomingLaunches: []};
        case UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES_SUCCESS:
            return {loading: false, error: null, upcomingLaunches: action.payload};
        case UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES_ERROR:
            return {loading: false, error: action.payload, upcomingLaunches: []};    
        default:
            return state;
    }
}

export const launchReducer = (state = launchInitialState, action: LaunchAction): LaunchState => {
    switch (action.type) {
        case LaunchActionTypes.FETCH_LAUNCH_BY_ID:
            return {loading: true, error: null, launch: null};
        case LaunchActionTypes.FETCH_LAUNCH_BY_ID_SUCCESS:
            return {loading: false, error: null, launch: action.payload};
        case LaunchActionTypes.FETCH_LAUNCH_BY_ID_ERROR:
            return {loading: false, error: action.payload, launch: null};    
        default:
            return state;
    }
}