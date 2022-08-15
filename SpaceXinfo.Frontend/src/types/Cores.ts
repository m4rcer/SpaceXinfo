export interface CoreListItemType {
    core: string,
    flight: number,
    reused: boolean,
    landing_success: boolean | null,
    landing_type: string | null
}

export interface CoreType {
    serial: string
}