import React, { useEffect, useState } from 'react';
import { fetchCoreById } from '../../../api/spacexdata/cores';
import { CoreListItemType } from '../../../types/Cores';
import LaunchModalInfoItem from './LaunchModalInfoItem';

export interface ILaunchModalCoreProps {
    core: CoreListItemType,
};

const LaunchModalCore: React.FunctionComponent<ILaunchModalCoreProps> = ({
    core
}) => {
    const [coreSerial, setCoreSerial] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    async function getCoreSerial(id:string){
        const core = await fetchCoreById(id);
        setCoreSerial(core.serial);
    }

    useEffect(() => {
        getCoreSerial(core.core);
    }, [])

    return (
    <div className="modal__launch__char__item">
        <div className="modal__launch__char__header">
            <div className="modal__launch__char__header__title">
                {coreSerial ? coreSerial : "Unknown"}
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
                <LaunchModalInfoItem title={"Flight"}>{core.flight}</LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Reused"}>
                    {
                        core.reused
                        ?
                        <i className="fa-solid fa-circle-check"></i>  
                        :
                        <i className="fa-solid fa-circle-xmark fail"></i>
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Landing Success"}>
                    {
                        core.landing_success
                        ?
                        <i className="fa-solid fa-circle-check"></i>  
                        :
                        <i className="fa-solid fa-circle-xmark fail"></i>
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Landing Type"}>
                    {
                        core.landing_type
                        ?
                        core.landing_type  
                        :
                        <i className="fa-solid fa-circle-xmark fail"></i>
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