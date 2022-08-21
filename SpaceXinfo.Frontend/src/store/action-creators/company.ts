import axios from "axios";
import { Dispatch } from "react";
import { CompanyAction, CompanyActionTypes, CompanyType } from "../../types/Company";

export const fetchCompany = () => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        try {
            dispatch({type: CompanyActionTypes.FETCH_COMPANY});
            const response = await axios.get<CompanyType>(`https://api.spacexdata.com/latest/company`);
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANY_SUCCESS,
                payload: response.data
            });
        } catch (exception) {
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANY_ERROR,
                payload: "An error occurred while loading company"
            })
        }
    }
}