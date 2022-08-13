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
