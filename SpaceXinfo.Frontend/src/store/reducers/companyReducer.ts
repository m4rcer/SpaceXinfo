import { CompanyAction, CompanyActionTypes, CompanyState } from "../../types/Company";

const companyInitialState: CompanyState = {
    company: null,
    loading: false,
    error: null,
}

export const companyReducer = (state = companyInitialState, action: CompanyAction): CompanyState => {
    switch (action.type) {
        case CompanyActionTypes.FETCH_COMPANY:
            return {loading: true, error: null, company: null};
        case CompanyActionTypes.FETCH_COMPANY_SUCCESS:
            return {loading: false, error: null, company: action.payload};
        case CompanyActionTypes.FETCH_COMPANY_ERROR:
            return {loading: false, error: action.payload, company: null};    
        default:
            return state;
    }
}