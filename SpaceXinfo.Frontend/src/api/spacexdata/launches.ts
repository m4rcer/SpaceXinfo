import axios from "axios";
import { LaunchType } from "../../components/UI/Launch/LaunchType";

export const fetchUpcomingLaunches = async () => {
    const response = await axios.get(`https://api.spacexdata.com/latest/launches/upcoming`).then(
        (response) => response.data
    );
    return response;
}

export const fetchPastLaunches = async () => {
    const response = await axios.get(`https://api.spacexdata.com/latest/launches/past`).then(
        (response) => response.data
    );
    return response;
}