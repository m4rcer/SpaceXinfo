import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { LaunchType } from '../../../types/Launches';
import { dateToString } from '../../../utils/date';
import LaunchModalCore from '../../UI/LaunchModalInfo/LaunchModalCore';
import LaunchModalPayload from '../../UI/LaunchModalInfo/LaunchModalPayload';
import LaunchpadModal from '../LaunchpadModal/LaunchpadModal';
import ModalBase from '../ModalBase';
import RocketModal from '../RocketModal/RocketModal';

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
    const [isRocketModalShow, setIsRocketModalShow] = useState(false);
    const [isLaunchpadModalShow, setIsLaunchpadModalShow] = useState(false);

    function OnRocketModalClose() {
        setIsRocketModalShow(false);
    }

    function OnRocketModalOpen() {
        setIsRocketModalShow(true);
    }

    function OnLaunchpadModalClose() {
        setIsLaunchpadModalShow(false);
    }

    function OnLaunchpadModalOpen() {
        setIsLaunchpadModalShow(true);
    }

    useEffect(() => {
        fetchRocketById(launch.rocket);
        fetchLaunchpadById(launch.launchpad);
    }, []);

    return (
    <>
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

        <div className="modal__launch__specs">
            <div className="modal__launch__specs__item"
            onClick={OnRocketModalOpen}>
                <i className="fa-solid fa-circle-info"></i> Rocket Specs</div>
            <div className="modal__launch__specs__item"
            onClick={OnLaunchpadModalOpen}>
                <i className="fa-solid fa-circle-info"></i> Launchpad specs</div>
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
                    <LaunchModalCore key={core.core} coreListItem={core}/>)}

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
        
    </div>
    <ModalBase OnClose={OnRocketModalClose} isOpen={isRocketModalShow}>
        {
            rocket
            ?
            <RocketModal rocket={rocket}/>
            :
            <div></div>
        }
    </ModalBase>

    <ModalBase OnClose={OnLaunchpadModalClose} isOpen={isLaunchpadModalShow}>
        {
            launchpad
            ?
            <LaunchpadModal launchpad={launchpad}/>
            :
            <div></div>
        }
    </ModalBase>
    </>);
}
export default LaunchModal;