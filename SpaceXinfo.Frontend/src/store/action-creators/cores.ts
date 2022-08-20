import axios from "axios";
import { Dispatch } from "react";
import { CoreAction, CoreActionTypes, CoresAction, CoresActionTypes, CoreType } from "../../types/Cores";

export const fetchCores = () => {
    return async (dispatch: Dispatch<CoresAction>) => {
        try {
            dispatch({type: CoresActionTypes.FETCH_CORES});
            const response = await axios.get<CoreType[]>(`https://api.spacexdata.com/latest/cores`);
            dispatch({
                type: CoresActionTypes.FETCH_CORES_SUCCESS,
                payload: response.data.reverse()
            });
        } catch (exception) {
            dispatch({
                type: CoresActionTypes.FETCH_CORES_ERROR,
                payload: "An error occurred while loading cores"
            })
        }
    }
}

export const fetchCoreById = (id: string) => {
    return async (dispatch: Dispatch<CoreAction>) => {
        try {
            dispatch({type: CoreActionTypes.FETCH_CORE_BY_ID});
            const response = await axios.get<CoreType>(`https://api.spacexdata.com/latest/cores/${id}`);
            dispatch({
                type: CoreActionTypes.FETCH_CORE_BY_ID_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: CoreActionTypes.FETCH_CORE_BY_ID_ERROR,
                payload: "An error occurred while loading core"
            })
        }
    }
}