import { PayloadAction, PayloadActionTypes, PayloadState } from "../../types/Payloads";

const payloadInitialState: PayloadState = {
    payload: null,
    loading: false,
    error: null,
}

export const payloadReducer = (state = payloadInitialState, action: PayloadAction): PayloadState => {
    switch (action.type) {
        case PayloadActionTypes.FETCH_PAYLOAD_BY_ID:
            return {loading: true, error: null, payload: null};
        case PayloadActionTypes.FETCH_PAYLOAD_BY_ID_SUCCESS:
            return {loading: false, error: null, payload: action.payload};
        case PayloadActionTypes.FETCH_PAYLOAD_BY_ID_ERROR:
            return {loading: false, error: action.payload, payload: null};    
        default:
            return state;
    }
}