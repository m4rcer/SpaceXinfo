import { RocketAction, RocketActionTypes, RocketsAction, RocketsActionTypes, RocketsState, RocketState } from "../../types/Rockets";

const rocketsInitialState: RocketsState = {
    rockets: [],
    rocketsLoading: false,
    error: null,
}

const rocketInitialState: RocketState = {
    rocket: null,
    rocketLoading: false,
    error: null,
}

export const rocketsReducer = (state = rocketsInitialState, action: RocketsAction): RocketsState => {
    switch (action.type) {
        case RocketsActionTypes.FETCH_ROCKETS:
            return {rocketsLoading: true, error: null, rockets: []};
        case RocketsActionTypes.FETCH_ROCKETS_SUCCESS:
            return {rocketsLoading: false, error: null, rockets: action.payload};
        case RocketsActionTypes.FETCH_ROCKETS_ERROR:
            return {rocketsLoading: false, error: action.payload, rockets: []};    
        default:
            return state;
    }
}

export const rocketReducer = (state = rocketInitialState, action: RocketAction): RocketState => {
    switch (action.type) {
        case RocketActionTypes.FETCH_ROCKET_BY_ID:
            return {rocketLoading: true, error: null, rocket: null};
        case RocketActionTypes.FETCH_ROCKET_BY_ID_SUCCESS:
            return {rocketLoading: false, error: null, rocket: action.payload};
        case RocketActionTypes.FETCH_ROCKET_BY_ID_ERROR:
            return {rocketLoading: false, error: action.payload, rocket: null};    
        default:
            return state;
    }
}