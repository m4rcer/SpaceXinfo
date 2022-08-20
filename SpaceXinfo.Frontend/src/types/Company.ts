export interface CompanyState {
    company: CompanyType | null;
    loading: boolean;
    error: string | null;
}

export enum CompanyActionTypes {
    FETCH_COMPANY = "FETCH_COMPANY",
    FETCH_COMPANY_SUCCESS = "FETCH_COMPANY_SUCCESS",
    FETCH_COMPANY_ERROR = "FETCH_COMPANY_ERROR",
}

interface FetchCompanyAction {
    type: CompanyActionTypes.FETCH_COMPANY;
}

interface FetchCompanySuccessAction {
    type: CompanyActionTypes.FETCH_COMPANY_SUCCESS;
    payload: CompanyType;
}

interface FetchCompanyErrorAction {
    type: CompanyActionTypes.FETCH_COMPANY_ERROR;
    payload: string;
}

export type CompanyAction = FetchCompanyAction | FetchCompanySuccessAction | FetchCompanyErrorAction;

export interface CompanyType {
    founder: string,
    founded: number,
    employees: number,
    summary: string,
    headquarters: HeadquartersType,
    valuation: number,
    cto_propulsion: string,
    coo: string,
    cto: string,
    ceo: string,
    vehicles: number,
    test_sites: number,
    launch_sites: number,
    links: LinksType,
}

interface LinksType {
    website: string,
    elon_twitter: string
}

interface HeadquartersType {
    address: string,
    city: string,
    state: string
}