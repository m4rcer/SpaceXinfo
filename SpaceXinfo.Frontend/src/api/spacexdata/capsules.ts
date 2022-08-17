import axios from "axios";
import { CapsuleType } from "../../types/Capsules";

export const fetchCapsules = async () => {
    const response = await axios.get<CapsuleType[]>(`https://api.spacexdata.com/latest/capsules`).then(
        (response) => response.data
    );
    return response;
}