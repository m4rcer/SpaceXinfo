export interface PayloadState {
    payload: PayloadType | null;
    loading: boolean;
    error: string | null;
}

export enum PayloadActionTypes {
    FETCH_PAYLOAD_BY_ID = "FETCH_PAYLOAD_BY_ID",
    FETCH_PAYLOAD_BY_ID_SUCCESS = "FETCH_PAYLOAD_BY_ID_SUCCESS",
    FETCH_PAYLOAD_BY_ID_ERROR = "FETCH_PAYLOAD_BY_ID_ERROR",
}

interface FetchPayloadByIdAction {
    type: PayloadActionTypes.FETCH_PAYLOAD_BY_ID;
}

interface FetchPayloadByIdSuccessAction {
    type: PayloadActionTypes.FETCH_PAYLOAD_BY_ID_SUCCESS;
    payload: PayloadType;
}

interface FetchPayloadByIdErrorAction {
    type: PayloadActionTypes.FETCH_PAYLOAD_BY_ID_ERROR;
    payload: string;
}

export type PayloadAction = FetchPayloadByIdAction | FetchPayloadByIdSuccessAction | FetchPayloadByIdErrorAction;

export interface PayloadType {
    name: string,
    customers: string[],
    reused: boolean,
    mass_kg: number,
    mass_lbs: number,
    type: string,
    orbit: string,
    reference_system: string,
    regime: string,
    longitude: number,
    semi_major_axis_km: number,
    eccentricity: number,
    periapsis_km: number,
    apoapsis_km: number,
    inclination_deg: number,
    period_min: number,
    lifespan_years: number
}