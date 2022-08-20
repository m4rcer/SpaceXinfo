import { CoreListItemType } from "./Cores";

export interface PastLaunchesState {
    pastLaunches: LaunchType[];
    loading: boolean;
    error: string | null;
}

export interface UpcomingLaunchesState {
    upcomingLaunches: LaunchType[];
    loading: boolean;
    error: string | null;
}

export interface NextLaunchState {
    nextLaunch: LaunchType | null;
    loading: boolean;
    error: string | null;
}

export interface LaunchState {
    launch: LaunchType | null;
    loading: boolean;
    error: string | null;
}

export enum PastLaunchesActionTypes {
    FETCH_PAST_LAUNCHES = "FETCH_PAST_LAUNCHES",
    FETCH_PAST_LAUNCHES_SUCCESS = "FETCH_PAST_LAUNCHES_SUCCESS",
    FETCH_PAST_LAUNCHES_ERROR = "FETCH_PAST_LAUNCHES_ERROR",
}

export enum UpcomingLaunchesActionTypes {
    FETCH_UPCOMING_LAUNCHES = "FETCH_UPCOMING_LAUNCHES",
    FETCH_UPCOMING_LAUNCHES_SUCCESS = "FETCH_UPCOMING_LAUNCHES_SUCCESS",
    FETCH_UPCOMING_LAUNCHES_ERROR = "FETCH_UPCOMING_LAUNCHES_ERROR",
}

export enum NextLaunchActionTypes {
    FETCH_NEXT_LAUNCH = "FETCH_NEXT_LAUNCH",
    FETCH_NEXT_LAUNCH_SUCCESS = "FETCH_NEXT_LAUNCH_SUCCESS",
    FETCH_NEXT_LAUNCH_ERROR = "FETCH_NEXT_LAUNCH_ERROR",
}

export enum LaunchActionTypes {
    FETCH_LAUNCH_BY_ID = "FETCH_LAUNCH_BY_ID",
    FETCH_LAUNCH_BY_ID_SUCCESS = "FETCH_LAUNCH_BY_ID_SUCCESS",
    FETCH_LAUNCH_BY_ID_ERROR = "FETCH_LAUNCH_BY_ID_ERROR",
}

interface FetchPastLaunchesAction {
    type: PastLaunchesActionTypes.FETCH_PAST_LAUNCHES;
}

interface FetchPastLaunchesSuccessAction {
    type: PastLaunchesActionTypes.FETCH_PAST_LAUNCHES_SUCCESS;
    payload: LaunchType[];
}

interface FetchPastLaunchesErrorAction {
    type: PastLaunchesActionTypes.FETCH_PAST_LAUNCHES_ERROR;
    payload: string;
}


interface FetchUpcomingLaunchesAction {
    type: UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES;
}

interface FetchUpcomingLaunchesSuccessAction {
    type: UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES_SUCCESS;
    payload: LaunchType[];
}

interface FetchUpcomingLaunchesErrorAction {
    type: UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES_ERROR;
    payload: string;
}


interface FetchNextLaunchAction {
    type: NextLaunchActionTypes.FETCH_NEXT_LAUNCH;
}

interface FetchNextLaunchSuccessAction {
    type: NextLaunchActionTypes.FETCH_NEXT_LAUNCH_SUCCESS;
    payload: LaunchType;
}

interface FetchNextLaunchErrorAction {
    type: NextLaunchActionTypes.FETCH_NEXT_LAUNCH_ERROR;
    payload: string;
}


interface FetchLaunchByIdAction {
    type: LaunchActionTypes.FETCH_LAUNCH_BY_ID;
}

interface FetchLaunchByIdSuccessAction {
    type: LaunchActionTypes.FETCH_LAUNCH_BY_ID_SUCCESS;
    payload: LaunchType;
}

interface FetchLaunchByIdErrorAction {
    type: LaunchActionTypes.FETCH_LAUNCH_BY_ID_ERROR;
    payload: string;
}

export type PastLaunchesAction = FetchPastLaunchesAction | FetchPastLaunchesSuccessAction | FetchPastLaunchesErrorAction;

export type UpcomingLaunchesAction = FetchUpcomingLaunchesAction | FetchUpcomingLaunchesSuccessAction | FetchUpcomingLaunchesErrorAction;

export type NextLaunchAction = FetchNextLaunchAction | FetchNextLaunchSuccessAction | FetchNextLaunchErrorAction;

export type LaunchAction = FetchLaunchByIdAction | FetchLaunchByIdSuccessAction | FetchLaunchByIdErrorAction;

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
    rocket: string
}

export interface LinkType {
    webcast: string,
    wikipedia: string,
    article: string
}