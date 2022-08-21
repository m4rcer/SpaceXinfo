import { CoreAction, CoreActionTypes, CoresAction, CoresActionTypes, CoresState, CoreState } from "../../types/Cores";

const coresInitialState: CoresState = {
    cores: [],
    loading: false,
    error: null,
}

const coreInitialState: CoreState = {
    core: null,
    loading: false,
    error: null,
}

export const coresReducer = (state = coresInitialState, action: CoresAction): CoresState => {
    switch (action.type) {
        case CoresActionTypes.FETCH_CORES:
            return {loading: true, error: null, cores: []};
        case CoresActionTypes.FETCH_CORES_SUCCESS:
            return {loading: false, error: null, cores: action.payload};
        case CoresActionTypes.FETCH_CORES_ERROR:
            return {loading: false, error: action.payload, cores: []};    
        default:
            return state;
    }
}

export const coreReducer = (state = coreInitialState, action: CoreAction): CoreState => {
    switch (action.type) {
        case CoreActionTypes.FETCH_CORE_BY_ID:
            return {loading: true, error: null, core: null};
        case CoreActionTypes.FETCH_CORE_BY_ID_SUCCESS:
            return {loading: false, error: null, core: action.payload};
        case CoreActionTypes.FETCH_CORE_BY_ID_ERROR:
            return {loading: false, error: action.payload, core: null};    
        default:
            return state;
    }
}