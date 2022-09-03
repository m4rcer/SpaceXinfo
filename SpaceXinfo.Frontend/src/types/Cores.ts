export interface CoresState {
    cores: CoreType[];
    coresLoading: boolean;
    error: string | null;
}

export interface CoreState {
    core: CoreType | null;
    coreLoading: boolean;
    error: string | null;
}

export enum CoresActionTypes {
    FETCH_CORES = "FETCH_CORES",
    FETCH_CORES_SUCCESS = "FETCH_CORES_SUCCESS",
    FETCH_CORES_ERROR = "FETCH_CORES_ERROR",
}

export enum CoreActionTypes {
    FETCH_CORE_BY_ID = "FETCH_CORE_BY_ID",
    FETCH_CORE_BY_ID_SUCCESS = "FETCH_CORE_BY_ID_SUCCESS",
    FETCH_CORE_BY_ID_ERROR = "FETCH_CORE_BY_ID_ERROR",
}

interface FetchCoresAction {
    type: CoresActionTypes.FETCH_CORES;
}

interface FetchCoresSuccessAction {
    type: CoresActionTypes.FETCH_CORES_SUCCESS;
    payload: CoreType[];
}

interface FetchCoresErrorAction {
    type: CoresActionTypes.FETCH_CORES_ERROR;
    payload: string;
}


interface FetchCoreByIdAction {
    type: CoreActionTypes.FETCH_CORE_BY_ID;
}

interface FetchCoreByIdSuccessAction {
    type: CoreActionTypes.FETCH_CORE_BY_ID_SUCCESS;
    payload: CoreType;
}

interface FetchCoreByIdErrorAction {
    type: CoreActionTypes.FETCH_CORE_BY_ID_ERROR;
    payload: string;
}

export type CoresAction = FetchCoresAction | FetchCoresSuccessAction | FetchCoresErrorAction;

export type CoreAction = FetchCoreByIdAction | FetchCoreByIdSuccessAction | FetchCoreByIdErrorAction;

export interface CoreListItemType {
    core: string,
    flight: number,
    reused: boolean,
    landing_success: boolean | null,
    landing_type: string | null
}

export interface CoreType {
    serial: string,
    last_update: string,
    rtls_attempts: number,
    reuse_count: number,
    rtls_landings: number,
    block: number,
    asds_attempts: number,
    asds_landings: number,
    status: string,
    launches: string[]
}