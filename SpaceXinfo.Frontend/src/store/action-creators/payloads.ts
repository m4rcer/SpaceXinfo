import axios from "axios";
import { Dispatch } from "react";
import { PayloadAction, PayloadActionTypes, PayloadType } from "../../types/Payloads";

export const fetchPayloadById = (id: string) => {
    return async (dispatch: Dispatch<PayloadAction>) => {
        try {
            dispatch({type: PayloadActionTypes.FETCH_PAYLOAD_BY_ID});
            const response = await axios.get<PayloadType>(`https://api.spacexdata.com/latest/payloads/${id}`);
            dispatch({
                type: PayloadActionTypes.FETCH_PAYLOAD_BY_ID_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: PayloadActionTypes.FETCH_PAYLOAD_BY_ID_ERROR,
                payload: "An error occurred while loading payload"
            })
        }
    }
}