import { CoreListItemType } from "./Cores";

export interface LaunchesState {
    launches: any[];
    loading: boolean;
    error: string | null;
}

export enum LaunchesActionTypes {
    FETCH_LAUNCHES = "FETCH_LAUNCHES",
    FETCH_LAUNCHES_SUCCESS = "FETCH_LAUNCHES_SUCCESS",
    FETCH_LAUNCHES_ERROR = "FETCH_LAUNCHES_ERROR",
}

interface FetchLaunchesAction {
    type: LaunchesActionTypes.FETCH_LAUNCHES;
}

interface FetchLaunchesSuccessAction {
    type: LaunchesActionTypes.FETCH_LAUNCHES_SUCCESS;
    payload: any[];
}

interface FetchLaunchesErrorAction {
    type: LaunchesActionTypes.FETCH_LAUNCHES_ERROR;
    payload: string;
}

export type LaunchesAction = FetchLaunchesAction | FetchLaunchesSuccessAction | FetchLaunchesErrorAction;

export interface LaunchListItemType {
    id: string,
    flight_number: number,
    name: string,
    success: boolean,
    date_utc: string,
    upcoming: boolean
} 

export interface LaunchType {
    id: string,
    links: LinkType
    flight_number: number,
    name: string,
    success: boolean,
    date_utc: string,
    upcoming: boolean,
    launchpad: string,
    cores: CoreListItemType[],
    payloads: string[],
    details: string,
}

export interface LinkType {
    webcast: string,
    wikipedia: string,
    article: string
}