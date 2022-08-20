export interface RocketsState {
    rockets: RocketType[];
    loading: boolean;
    error: string | null;
}

export interface RocketState {
    rocket: RocketType | null;
    loading: boolean;
    error: string | null;
}

export enum RocketsActionTypes {
    FETCH_ROCKETS = "FETCH_ROCKETS",
    FETCH_ROCKETS_SUCCESS = "FETCH_ROCKETS_SUCCESS",
    FETCH_ROCKETS_ERROR = "FETCH_ROCKETS_ERROR",
}

export enum RocketActionTypes {
    FETCH_ROCKET_BY_ID = "FETCH_ROCKET_BY_ID",
    FETCH_ROCKET_BY_ID_SUCCESS = "FETCH_ROCKET_BY_ID_SUCCESS",
    FETCH_ROCKET_BY_ID_ERROR = "FETCH_ROCKET_BY_ID_ERROR",
}

interface FetchRocketsAction {
    type: RocketsActionTypes.FETCH_ROCKETS;
}

interface FetchRocketsSuccessAction {
    type: RocketsActionTypes.FETCH_ROCKETS_SUCCESS;
    payload: RocketType[];
}

interface FetchRocketsErrorAction {
    type: RocketsActionTypes.FETCH_ROCKETS_ERROR;
    payload: string;
}


interface FetchRocketByIdAction {
    type: RocketActionTypes.FETCH_ROCKET_BY_ID;
}

interface FetchRocketByIdSuccessAction {
    type: RocketActionTypes.FETCH_ROCKET_BY_ID_SUCCESS;
    payload: RocketType;
}

interface FetchRocketByIdErrorAction {
    type: RocketActionTypes.FETCH_ROCKET_BY_ID_ERROR;
    payload: string;
}

export type RocketsAction = FetchRocketsAction | FetchRocketsSuccessAction | FetchRocketsErrorAction;

export type RocketAction = FetchRocketByIdAction | FetchRocketByIdSuccessAction | FetchRocketByIdErrorAction;

export interface RocketType {
    id: string,
    active: boolean,
    first_flight: string,
    flickr_images: string[],
    name: string,
    description: string,
    company: string,
    cost_per_launch: number,
    success_rate_pct: number,
    payload_weights: RocketPayloadType[],
    height: RocketMetersType,
    diameter: RocketMetersType,
    mass: RocketMassType
}

export interface RocketPayloadType {
    id: string,
    name: string,
    kg: number
}

export interface RocketMetersType {
    meters: number
}

export interface RocketMassType {
    kg: number
}