import axios from "axios";
import { CompanyType } from "../../types/Company";

export const fetchCompany = async () => {
    const response = await axios.get<CompanyType>(`https://api.spacexdata.com/latest/company`).then(
        (response) => response.data
    );
    return response;
}