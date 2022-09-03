import React, { useEffect} from "react";
import { ILaunchModalCharProps } from "../../../components/UI/LaunchModalChar/LaunchModalChar";
import LaunchModalInfoItem from "../../../components/UI/LaunchModalChar/LaunchModalCharItem";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export interface ILaunchModalPayloadProps {
    payloadId: string,
};

export function withLaunchModalPayload(Component : React.ComponentType<ILaunchModalCharProps>) {
    return function (props: ILaunchModalPayloadProps) {
        
        const {payloadId} = props;
        const {payload} = useTypedSelector(state => state.payload);
        const {fetchPayloadById} = useActions();

        useEffect(() => {
            fetchPayloadById(payloadId);
        }, []);

        return (
            <Component
            title={payload ? payload.name : "Unknown"}>
                
                <LaunchModalInfoItem title={"Customers"}>{payload?.customers}</LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Reused"}>
                    {
                        payload?.reused
                        ?
                        <i className="fa-solid fa-circle-check"></i>  
                        :
                        <i className="fa-solid fa-circle-xmark fail"></i>
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Mass"}>
                    {
                        `${payload?.mass_kg
                        ? 
                        Math.ceil(payload?.mass_kg)
                        :
                        0
                    }kg`}
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Payload"}>{payload?.type}</LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Orbit"}>{payload?.orbit}</LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Regime"}>{payload?.regime}</LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Longitude"}>
                    {
                        payload?.lifespan_years
                        ? 
                        payload?.lifespan_years
                        :
                        0
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Semi Major Axis"}>
                    {
                        `${payload?.semi_major_axis_km
                        ? 
                        payload?.semi_major_axis_km
                        :
                        0
                        }km`
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Eccentricity"}>
                    {
                        payload?.eccentricity
                        ? 
                        payload?.eccentricity
                        :
                        0
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Periapsis"}>
                    {
                        `${payload?.periapsis_km
                        ? 
                        payload?.periapsis_km
                        :
                        0
                        }km`
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Apoapsis"}>
                    {
                        `${payload?.apoapsis_km
                        ? 
                        payload?.apoapsis_km
                        :
                        0
                        }km`
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Inclination"}>
                    {
                        `${payload?.inclination_deg
                        ? 
                        payload?.inclination_deg
                        :
                        0
                        }`
                    }
                    <i>&deg;</i>
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Period"}>
                    {
                        `${payload?.period_min
                        ? 
                        payload?.period_min
                        :
                        0
                        }min`
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Lifespan"}>
                    {
                        `${payload?.lifespan_years
                        ? 
                        payload?.lifespan_years
                        :
                        0
                        }years`
                    }
                </LaunchModalInfoItem>

            </Component>
        );
    }
}