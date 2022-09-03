import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useModal } from '../../../hooks/useModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { LaunchType } from '../../../types/Launches';
import { dateToString } from '../../../utils/date';
import {LaunchModalCore, LaunchModalPayload} from '../../UI/LaunchModalChar/LaunchModalChar';
import { LaunchpadSpecs, RocketSpecs } from '../../UI/LaunchSpecs/LaunchSpecs';

export interface ILaunchModalProps {
    launch: LaunchType
};

const LaunchModal: React.FunctionComponent<ILaunchModalProps> = ({
    launch
}) => {
    const {rocket} = useTypedSelector(state => state.rocket);
    const {fetchRocketById} = useActions();
    const {launchpad} = useTypedSelector(state => state.launchpad);
    const {fetchLaunchpadById} = useActions();    


    useEffect(() => {
        fetchRocketById(launch.rocket);
        fetchLaunchpadById(launch.launchpad);
    }, []);

    return (
    <div className="modal__launch">
        <div className="modal__launch__header">
            <div className="modal__launch__header__item">
                <div className="modal__launch__info">
                    {
                        !launch.upcoming 
                        ?
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

        <div className="modal__launch__specs">
            <RocketSpecs rocket={rocket}/>
            <LaunchpadSpecs launchpad={launchpad}/>
        </div>

        {
            !launch.upcoming
            ?
            <div className="modal__launch__content">
                <div className="modal__launch__char">
                    <div className="modal__launch__char__title">
                        Cores
                    </div>
                    
                    {launch.cores.map((core) => 
                    <LaunchModalCore key={core.core} coreListItem={core}/>
                    )}

                </div>

                <div className="modal__launch__char">
                    <div className="modal__launch__char__title">
                        Payloads
                    </div>

                    {launch.payloads.map((payload) => 
                    <LaunchModalPayload key={payload} payloadId={payload}/>)}
                    
                </div>
            </div>
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
    </div>);
}
export default LaunchModal;