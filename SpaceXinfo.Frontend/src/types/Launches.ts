import { LaunchListVm, LaunchLookupDto } from "../api/api";
import { CoreListItemType } from "./Cores";

export interface PastLaunchesState {
    pastLaunches: LaunchType[];
    pastLaunchesLoading: boolean;
    error: string | null;
}

export interface UpcomingLaunchesState {
    upcomingLaunches: LaunchType[];
    upcomingLaunchesLoading: boolean;
    error: string | null;
}

export interface NextLaunchState {
    nextLaunch: LaunchType | null;
    nextLaunchLoading: boolean;
    error: string | null;
}

export interface LaunchState {
    launch: LaunchType | null;
    launchLoading: boolean;
    error: string | null;
}

export interface FavouriteLaunchesState {
    favouriteLaunches: LaunchLookupDto[];
    favouriteLaunchesLoading: boolean;
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

export enum FavouriteLaunchesActionTypes {
    FETCH_FAVOURITE_LAUNCHES = "FETCH_FAVOURITE_LAUNCHES",
    FETCH_FAVOURITE_LAUNCHES_SUCCESS = "FETCH_FAVOURITE_LAUNCHES_SUCCESS",
    FETCH_FAVOURITE_LAUNCHES_ERROR = "FETCH_FAVOURITE_LAUNCHES_ERROR",
}

//#region 
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
//#endregion

//#region 
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
//#endregion

//#region 
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
//#endregion

//#region 
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
//#endregion

//#region 
interface FetchFavouriteLaunchesAction {
    type: FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES;
}

interface FetchFavouriteLaunchesSuccessAction {
    type: FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES_SUCCESS;
    payload: LaunchLookupDto[];
}

interface FetchFavouriteLaunchesErrorAction {
    type: FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES_ERROR;
    payload: string;
}
//#endregion

export type PastLaunchesAction = FetchPastLaunchesAction | FetchPastLaunchesSuccessAction | FetchPastLaunchesErrorAction;

export type UpcomingLaunchesAction = FetchUpcomingLaunchesAction | FetchUpcomingLaunchesSuccessAction | FetchUpcomingLaunchesErrorAction;

export type NextLaunchAction = FetchNextLaunchAction | FetchNextLaunchSuccessAction | FetchNextLaunchErrorAction;

export type LaunchAction = FetchLaunchByIdAction | FetchLaunchByIdSuccessAction | FetchLaunchByIdErrorAction;

export type FavouriteLaunchesAction = FetchFavouriteLaunchesAction | FetchFavouriteLaunchesSuccessAction | FetchFavouriteLaunchesErrorAction;

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