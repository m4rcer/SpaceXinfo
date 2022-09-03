export interface CapsulesState {
    capsules: CapsuleType[];
    capsulesLoading: boolean;
    error: string | null;
}

export enum CapsulesActionTypes {
    FETCH_CAPSULES = "FETCH_CAPSULES",
    FETCH_CAPSULES_SUCCESS = "FETCH_CAPSULES_SUCCESS",
    FETCH_CAPSULES_ERROR = "FETCH_CAPSULES_ERROR",
}

interface FetchCapsulesAction {
    type: CapsulesActionTypes.FETCH_CAPSULES;
}

interface FetchCapsulesSuccessAction {
    type: CapsulesActionTypes.FETCH_CAPSULES_SUCCESS;
    payload: CapsuleType[];
}

interface FetchCapsulesErrorAction {
    type: CapsulesActionTypes.FETCH_CAPSULES_ERROR;
    payload: string;
}

export type CapsulesAction = FetchCapsulesAction | FetchCapsulesSuccessAction | FetchCapsulesErrorAction;

export interface CapsuleType {
    id: string,
    serial: string,
    type: string,
    status: string,
    reuse_count: number,
    water_landings: number,
    land_landings: number,
    last_update: string,
    launches: string[],
}