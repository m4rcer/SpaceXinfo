import { FavouriteLaunchesAction, FavouriteLaunchesActionTypes, FavouriteLaunchesState, LaunchAction, LaunchActionTypes, LaunchState, NextLaunchAction, NextLaunchActionTypes, NextLaunchState, PastLaunchesAction, PastLaunchesActionTypes, PastLaunchesState, UpcomingLaunchesAction, UpcomingLaunchesActionTypes, UpcomingLaunchesState } from "../../types/Launches";

const nextLaunchInitialState: NextLaunchState = {
    nextLaunch: null,
    nextLaunchLoading: false,
    error: null,
}

const pastLaunchesInitialState: PastLaunchesState = {
    pastLaunches: [],
    pastLaunchesLoading: false,
    error: null,
}

const upcomingLaunchesInitialState: UpcomingLaunchesState = {
    upcomingLaunches: [],
    upcomingLaunchesLoading: false,
    error: null,
}

const launchInitialState: LaunchState = {
    launch: null,
    launchLoading: false,
    error: null,
}

const FavouriteLaunchesInitialState: FavouriteLaunchesState = {
    favouriteLaunches: [],
    favouriteLaunchesLoading: false,
    error: null,
}

export const nextLaunchReducer = (state = nextLaunchInitialState, action: NextLaunchAction): NextLaunchState => {
    switch (action.type) {
        case NextLaunchActionTypes.FETCH_NEXT_LAUNCH:
            return {nextLaunchLoading: true, error: null, nextLaunch: null};
        case NextLaunchActionTypes.FETCH_NEXT_LAUNCH_SUCCESS:
            return {nextLaunchLoading: false, error: null, nextLaunch: action.payload};
        case NextLaunchActionTypes.FETCH_NEXT_LAUNCH_ERROR:
            return {nextLaunchLoading: false, error: action.payload, nextLaunch: null};    
        default:
            return state;
    }
}

export const pastLaunchesReducer = (state = pastLaunchesInitialState, action: PastLaunchesAction): PastLaunchesState => {
    switch (action.type) {
        case PastLaunchesActionTypes.FETCH_PAST_LAUNCHES:
            return {pastLaunchesLoading: true, error: null, pastLaunches: []};
        case PastLaunchesActionTypes.FETCH_PAST_LAUNCHES_SUCCESS:
            return {pastLaunchesLoading: false, error: null, pastLaunches: action.payload};
        case PastLaunchesActionTypes.FETCH_PAST_LAUNCHES_ERROR:
            return {pastLaunchesLoading: false, error: action.payload, pastLaunches: []};    
        default:
            return state;
    }
}

export const upcomingLaunchesReducer = (state = upcomingLaunchesInitialState, action: UpcomingLaunchesAction): UpcomingLaunchesState => {
    switch (action.type) {
        case UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES:
            return {upcomingLaunchesLoading: true, error: null, upcomingLaunches: []};
        case UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES_SUCCESS:
            return {upcomingLaunchesLoading: false, error: null, upcomingLaunches: action.payload};
        case UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES_ERROR:
            return {upcomingLaunchesLoading: false, error: action.payload, upcomingLaunches: []};    
        default:
            return state;
    }
}

export const launchReducer = (state = launchInitialState, action: LaunchAction): LaunchState => {
    switch (action.type) {
        case LaunchActionTypes.FETCH_LAUNCH_BY_ID:
            return {launchLoading: true, error: null, launch: null};
        case LaunchActionTypes.FETCH_LAUNCH_BY_ID_SUCCESS:
            return {launchLoading: false, error: null, launch: action.payload};
        case LaunchActionTypes.FETCH_LAUNCH_BY_ID_ERROR:
            return {launchLoading: false, error: action.payload, launch: null};    
        default:
            return state;
    }
}

export const favouriteLaunchesReducer = (state = FavouriteLaunchesInitialState, action: FavouriteLaunchesAction): FavouriteLaunchesState => {
    switch (action.type) {
        case FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES:
            return {favouriteLaunchesLoading: true, error: null, favouriteLaunches: []};
        case FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES_SUCCESS:
            return {favouriteLaunchesLoading: false, error: null, favouriteLaunches: action.payload};
        case FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES_ERROR:
            return {favouriteLaunchesLoading: false, error: action.payload, favouriteLaunches: []};    
        default:
            return state;
    }
}