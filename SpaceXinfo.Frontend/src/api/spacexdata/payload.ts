import axios from "axios";
import { PayloadType } from "../../types/Payloads";

export const fetchPayloadById = async (id:string | undefined) => {
    const response = await axios.get<PayloadType>(`https://api.spacexdata.com/latest/payloads/${id}`).then(
        (response) => response.data
    );
    return response;
}