import { RocketAction, RocketActionTypes, RocketsAction, RocketsActionTypes, RocketsState, RocketState } from "../../types/Rockets";

const rocketsInitialState: RocketsState = {
    rockets: [],
    loading: false,
    error: null,
}

const rocketInitialState: RocketState = {
    rocket: null,
    loading: false,
    error: null,
}

export const rocketsReducer = (state = rocketsInitialState, action: RocketsAction): RocketsState => {
    switch (action.type) {
        case RocketsActionTypes.FETCH_ROCKETS:
            return {loading: true, error: null, rockets: []};
        case RocketsActionTypes.FETCH_ROCKETS_SUCCESS:
            return {loading: false, error: null, rockets: action.payload};
        case RocketsActionTypes.FETCH_ROCKETS_ERROR:
            return {loading: false, error: action.payload, rockets: []};    
        default:
            return state;
    }
}

export const rocketReducer = (state = rocketInitialState, action: RocketAction): RocketState => {
    switch (action.type) {
        case RocketActionTypes.FETCH_ROCKET_BY_ID:
            return {loading: true, error: null, rocket: null};
        case RocketActionTypes.FETCH_ROCKET_BY_ID_SUCCESS:
            return {loading: false, error: null, rocket: action.payload};
        case RocketActionTypes.FETCH_ROCKET_BY_ID_ERROR:
            return {loading: false, error: action.payload, rocket: null};    
        default:
            return state;
    }
}