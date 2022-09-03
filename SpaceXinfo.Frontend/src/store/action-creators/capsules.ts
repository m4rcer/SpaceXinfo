import axios from "axios";
import { Dispatch } from "react";
import { CapsulesAction, CapsulesActionTypes, CapsuleType } from "../../types/Capsules";

export const fetchCapsules = () => {
    return async (dispatch: Dispatch<CapsulesAction>) => {
        try {
            dispatch({type: CapsulesActionTypes.FETCH_CAPSULES});
            const response = await axios.get<CapsuleType[]>(`https://api.spacexdata.com/latest/capsules`);
            dispatch({
                type: CapsulesActionTypes.FETCH_CAPSULES_SUCCESS,
                payload: response.data.reverse()
            });
        } catch (exception) {
            dispatch({
                type: CapsulesActionTypes.FETCH_CAPSULES_ERROR,
                payload: "An error occurred while loading capsules"
            })
        }
    }
}