import axios from "axios";
import { Dispatch } from "react";
import { LaunchpadAction, LaunchpadActionTypes, LaunchpadType } from "../../types/Launchpads";

export const fetchLaunchpadById = (id: string) => {
    return async (dispatch: Dispatch<LaunchpadAction>) => {
        try {
            dispatch({type: LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID});
            const response = await axios.get<LaunchpadType>(`https://api.spacexdata.com/latest/launchpads/${id}`);
            dispatch({
                type: LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: LaunchpadActionTypes.FETCH_LAUNCHPAD_BY_ID_ERROR,
                payload: "An error occurred while loading launchpad"
            })
        }
    }
}