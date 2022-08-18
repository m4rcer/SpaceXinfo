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