import axios from "axios";
import { Dispatch } from "react";
import { RocketAction, RocketActionTypes, RocketsAction, RocketsActionTypes, RocketType } from "../../types/Rockets";

export const fetchRockets = () => {
    return async (dispatch: Dispatch<RocketsAction>) => {
        try {
            dispatch({type: RocketsActionTypes.FETCH_ROCKETS});
            const response = await axios.get<RocketType[]>(`https://api.spacexdata.com/latest/rockets`);
            dispatch({
                type: RocketsActionTypes.FETCH_ROCKETS_SUCCESS,
                payload: response.data.reverse()
            });
        } catch (exception) {
            dispatch({
                type: RocketsActionTypes.FETCH_ROCKETS_ERROR,
                payload: "An error occurred while loading rockets"
            })
        }
    }
}

export const fetchRocketById = (id: string) => {
    return async (dispatch: Dispatch<RocketAction>) => {
        try {
            dispatch({type: RocketActionTypes.FETCH_ROCKET_BY_ID});
            const response = await axios.get<RocketType>(`https://api.spacexdata.com/latest/rockets/${id}`);
            dispatch({
                type: RocketActionTypes.FETCH_ROCKET_BY_ID_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: RocketActionTypes.FETCH_ROCKET_BY_ID_ERROR,
                payload: "An error occurred while loading rocket"
            })
        }
    }
}