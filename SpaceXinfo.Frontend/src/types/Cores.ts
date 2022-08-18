export interface CoreListItemType {
    core: string,
    flight: number,
    reused: boolean,
    landing_success: boolean | null,
    landing_type: string | null
}

export interface CoreType {
    serial: string,
    last_update: string,
    rtls_attempts: number,
    reuse_count: number,
    rtls_landings: number,
    block: number,
    asds_attempts: number,
    asds_landings: number,
    status: string,
    launches: string[]
}