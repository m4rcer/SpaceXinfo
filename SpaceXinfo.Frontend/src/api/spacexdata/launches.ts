import axios from "axios";
import { LaunchListItemType, LaunchType } from "../../types/Launches";

export const fetchUpcomingLaunches = async () => {
    const response = await axios.get<LaunchListItemType[]>(`https://api.spacexdata.com/latest/launches/upcoming`).then(
        (response) => response.data
    );
    return response;
}

export const fetchPastLaunches = async () => {
    const response = await axios.get<LaunchListItemType[]>(`https://api.spacexdata.com/latest/launches/past`).then(
        (response) => response.data
    );
    return response;
}

export const fetchLaunchById = async (id:string) => {
    const response = await axios.get<LaunchType>(`https://api.spacexdata.com/latest/launches/${id}`).then(
        (response) => response.data
    );
    return response;
}