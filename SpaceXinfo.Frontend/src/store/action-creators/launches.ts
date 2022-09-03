import axios from "axios";
import { Dispatch } from "react";
import { Client } from "../../api/api";
import { FavouriteLaunchesAction, FavouriteLaunchesActionTypes, LaunchAction, LaunchActionTypes, LaunchType, NextLaunchAction, NextLaunchActionTypes, PastLaunchesAction, PastLaunchesActionTypes, UpcomingLaunchesAction, UpcomingLaunchesActionTypes } from "../../types/Launches";

declare module 'axios' {   
    export interface AxiosRequestConfig {
        query?: any;
        options?: any;   
    } 
}

export const fetchNextLaunch = () => {
    return async (dispatch: Dispatch<NextLaunchAction>) => {
        try {
            dispatch({type: NextLaunchActionTypes.FETCH_NEXT_LAUNCH});
            const response = await axios.get<LaunchType>(`https://api.spacexdata.com/latest/launches/next`);
            dispatch({
                type: NextLaunchActionTypes.FETCH_NEXT_LAUNCH_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: NextLaunchActionTypes.FETCH_NEXT_LAUNCH_ERROR,
                payload: "An error occurred while loading launch"
            })
        }
    }
}

export const fetchPastLaunches = () => {
    return async (dispatch: Dispatch<PastLaunchesAction>) => {
        try {
            dispatch({type: PastLaunchesActionTypes.FETCH_PAST_LAUNCHES});
            const response = await axios.get<LaunchType[]>(`https://api.spacexdata.com/v5/launches/past`);
            dispatch({
                type: PastLaunchesActionTypes.FETCH_PAST_LAUNCHES_SUCCESS,
                payload: response.data.reverse()
            });
        } catch (exception) {
            dispatch({
                type: PastLaunchesActionTypes.FETCH_PAST_LAUNCHES_ERROR,
                payload: "An error occurred while loading launches"
            })
        }
    }
}

export const fetchUpcomingLaunches = () => {
    return async (dispatch: Dispatch<UpcomingLaunchesAction>) => {
        try {
            dispatch({type: UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES});
            const response = await axios.get<LaunchType[]>(`https://api.spacexdata.com/latest/launches/upcoming`);
            dispatch({
                type: UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: UpcomingLaunchesActionTypes.FETCH_UPCOMING_LAUNCHES_ERROR,
                payload: "An error occurred while loading launches"
            })
        }
    }
}

export const fetchLaunchById = (id: string) => {
    return async (dispatch: Dispatch<LaunchAction>) => {
        try {
            dispatch({type: LaunchActionTypes.FETCH_LAUNCH_BY_ID});
            const response = await axios.get<LaunchType>(`https://api.spacexdata.com/latest/launches/${id}`);
            dispatch({
                type: LaunchActionTypes.FETCH_LAUNCH_BY_ID_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: LaunchActionTypes.FETCH_LAUNCH_BY_ID_ERROR,
                payload: "An error occurred while loading launch"
            })
        }
    }
}

export const fetchFavouriteLaunches = (client: Client) => {
    return async (dispatch: Dispatch<FavouriteLaunchesAction>) => {
        try {
            dispatch({type: FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES});
            const response = await client.launchesGET();
            dispatch({
                type: FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES_SUCCESS,
                payload: response.launches ? response.launches : []
            });
        } catch (exception) {
            dispatch({
                type: FavouriteLaunchesActionTypes.FETCH_FAVOURITE_LAUNCHES_ERROR,
                payload: "An error occurred while loading launches"
            })
        }
    }
}