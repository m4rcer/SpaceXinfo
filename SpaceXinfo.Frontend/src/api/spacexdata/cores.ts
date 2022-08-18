import axios from "axios";
import { CoreType } from "../../types/Cores";

export const fetchCoreById = async (id:string | undefined) => {
    const response = await axios.get<CoreType>(`https://api.spacexdata.com/latest/cores/${id}`).then(
        (response) => response.data
    );
    return response;
}

export const fetchCores = async () => {
    const response = await axios.get<CoreType[]>(`https://api.spacexdata.com/latest/cores/`).then(
        (response) => response.data
    );
    return response;
}