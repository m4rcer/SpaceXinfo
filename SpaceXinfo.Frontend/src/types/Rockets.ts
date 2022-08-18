
export interface RocketType {
    id: string,
    active: boolean,
    first_flight: string,
    flickr_images: string[],
    name: string,
    description: string,
    company: string,
    cost_per_launch: number,
    success_rate_pct: number,
    payload_weights: RocketPayloadType[],
    height: RocketMetersType,
    diameter: RocketMetersType,
    mass: RocketMassType
}

export interface RocketPayloadType {
    id: string,
    name: string,
    kg: number
}

export interface RocketMetersType {
    meters: number
}

export interface RocketMassType {
    kg: number
}