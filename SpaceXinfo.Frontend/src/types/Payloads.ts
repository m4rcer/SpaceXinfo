export interface PayloadType {
    name: string,
    customers: string[],
    reused: boolean,
    mass_kg: number,
    mass_lbs: number,
    type: string,
    orbit: string,
    reference_system: string,
    regime: string,
    longitude: number,
    semi_major_axis_km: number,
    eccentricity: number,
    periapsis_km: number,
    apoapsis_km: number,
    inclination_deg: number,
    period_min: number,
    lifespan_years: number
}