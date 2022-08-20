export interface LaunchpadState {
    launchpad: LaunchpadType | null;
    loading: boolean;
    error: string | null;
}

export enum LaunchpadActionTypes {
    FETCH_LAUNCHPAD_BY_ID = "FETCH_LAUNCHPAD_BY_ID",
    FETCH_LAUNCHPAD_BY_ID_SUCCESS = "FETCH_LAUNCHPAD_BY_ID_SUCCESS",
    FETCH_LAUNCHPAD_BY_ID_ERROR = "FETCH_LAUNCHPAD_BY_ID_ERROR",
}

interface FetchLaunchpadByIdAction {
    type: LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID;
}

interface FetchLaunchpadByIdSuccessAction {
    type: LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID_SUCCESS;
    payload: LaunchpadType;
}

interface FetchLaunchpadByIdErrorAction {
    type: LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID_ERROR;
    payload: string;
}

export type LaunchpadAction = FetchLaunchpadByIdAction | FetchLaunchpadByIdSuccessAction | FetchLaunchpadByIdErrorAction;

export interface LaunchpadType {
    id: string,
    name: string,
    locality: string,
    region: string,
    launch_attempts: number,
    launch_successes: number,
    latitude: number,
    longitude: number,
    status: string,
    details: string
}