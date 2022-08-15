import React, { useEffect, useState } from 'react';
import { fetchPayloadById } from '../../../api/spacexdata/payload';
import { PayloadType } from '../../../types/Payloads';
import LaunchModalInfoItem from './LaunchModalInfoItem';

export interface ILaunchModalCoreProps {
    payloadId: string
};

const LaunchModalCore: React.FunctionComponent<ILaunchModalCoreProps> = ({
    payloadId
}) => {
    const [payload, setPayload] = useState<PayloadType | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    async function getPayload(id:string){
        const payload = await fetchPayloadById(id);
        setPayload(payload);
    }

    useEffect(() => {
        getPayload(payloadId);
    }, [])

    return (
    <div className="modal__launch__char__item">
        <div className="modal__launch__char__header">
            <div className="modal__launch__char__header__title">
                {payload?.name ? payload?.name : "Unknown"}
            </div>
            <div className="modal__launch__char__header__angle"
            onClick={() => setIsOpen(!isOpen)}>
                <i className={["fa-solid fa-angle-down",
                "modal__launch__angle",
                isOpen ? "modal__launch__angle--up" : ""].join(" ")}></i>
            </div>
        </div>
        {
            isOpen
            ?
            <div className="modal__launch__char__info">
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
            </div>
            :
            <div></div>
        }
        <div className="modal__launch__char__specs">
            <div className="modal__launch__char__specs__item">
                <i className="fa-solid fa-circle-info"></i> Specs
            </div>
        </div>
    </div>)
}
export default LaunchModalCore;