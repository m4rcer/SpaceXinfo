import axios from "axios"
import { Dispatch } from "redux"
import { LaunchesAction, LaunchesActionTypes } from "../../types/Launches"

export const fetchLaunches = () => {
    return async (dispatch: Dispatch<LaunchesAction>) => {
        try {
            dispatch({type: LaunchesActionTypes.FETCH_LAUNCHES});
            const response = await axios.get(`https://api.spacexdata.com/v3/launches/past`);
            dispatch({
                type: LaunchesActionTypes.FETCH_LAUNCHES_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: LaunchesActionTypes.FETCH_LAUNCHES_ERROR,
                payload: "An error occurred while loading launches"
            })
        }
    }
}