import axios from "axios";
import { RocketType } from "../../types/Rockets";

export const fetchRockets = async () => {
    const response = await axios.get<RocketType[]>(`https://api.spacexdata.com/latest/rockets/`).then(
        (response) => response.data
    );
    return response;
}