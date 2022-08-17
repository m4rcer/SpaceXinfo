import React, { useEffect, useState } from 'react';
import { fetchLaunchById } from '../../../api/spacexdata/launches';
import { LaunchType } from '../../../types/Launches';
import { dateToString } from '../../../utils/date';
import LaunchModalCore from '../../UI/LaunchModalInfo/LaunchModalCore';
import LaunchModalPayload from '../../UI/LaunchModalInfo/LaunchModalPayload';

export interface ILaunchModalProps {
    id: string
};

const LaunchModal: React.FunctionComponent<ILaunchModalProps> = ({
    id
}) => {

    const [launch, setLaunch] = useState<LaunchType | null>(null);

    async function getLaunch() {
        const launch = await fetchLaunchById(id);
        setLaunch(launch);
    }

    useEffect(() => {
        getLaunch();
    }, []);
    
    if(!launch) {
        return <h1>No Data</h1>
    }

    return (
    <div className="modal__launch">
        <div className="modal__launch__header">
            <div className="modal__launch__header__item">
                <div className="modal__launch__info">
                    {!launch.upcoming ?
                    launch.success 
                        ?
                        "Success" 
                        : 
                        "Fail"
                    :
                    "TBD"
                    }
                </div>
                <h3 className="modal__launch__title">{launch.name}</h3>
                <div className="modal__launch__date">{
                    dateToString(new Date(launch.date_utc))
                }</div>
            </div>

            <div className="modal__launch__header__item 
            modal__launch__header__item--right">
                <div className="modal__launch__info">F-NR</div>
                <h3 className="modal__launch__title">{launch.flight_number}</h3>
            </div>
        </div>

        {
            launch.details
            ?
            <div className="modal__launch__decription">{launch.details}</div>
            :
            <div></div>
        }

        {
            launch.links.webcast
            ?
            <div className="modal__launch__socials">
                <a href={launch.links.webcast}
                target="_blank"
                className="modal__launch__socials__link">
                    Watch on<i className="fa-brands fa-youtube"></i>
                </a>
            </div>
            :
            <div></div>
        }
        

        <div className="modal__launch__specs">
            <div className="modal__launch__specs__item">
                <i className="fa-solid fa-circle-info"></i> Rocket Specs</div>
            <div className="modal__launch__specs__item">
                <i className="fa-solid fa-circle-info"></i> Launchpad specs</div>
        </div>

        <div className="modal__launch__content">
            <div className="modal__launch__char">
                <div className="modal__launch__char__title">
                    Cores
                </div>
                
                {launch.cores.map((core) => 
                <LaunchModalCore key={core.core} core={core}/>)}

            </div>

            <div className="modal__launch__char">

                <div className="modal__launch__char__title">
                    Payloads
                </div>

                {launch.payloads.map((payload) => 
                <LaunchModalPayload key={payload} payloadId={payload}/>)}
                
            </div>
        </div>
    </div>);
}
export default LaunchModal;