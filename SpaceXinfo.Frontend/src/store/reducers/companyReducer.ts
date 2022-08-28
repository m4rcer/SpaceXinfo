import { CompanyAction, CompanyActionTypes, CompanyState } from "../../types/Company";

const companyInitialState: CompanyState = {
    company: null,
    companyLoading: false,
    error: null,
}

export const companyReducer = (state = companyInitialState, action: CompanyAction): CompanyState => {
    switch (action.type) {
        case CompanyActionTypes.FETCH_COMPANY:
            return {companyLoading: true, error: null, company: null};
        case CompanyActionTypes.FETCH_COMPANY_SUCCESS:
            return {companyLoading: false, error: null, company: action.payload};
        case CompanyActionTypes.FETCH_COMPANY_ERROR:
            return {companyLoading: false, error: action.payload, company: null};    
        default:
            return state;
    }
}