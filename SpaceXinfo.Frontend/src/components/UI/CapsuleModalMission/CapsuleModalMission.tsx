import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LaunchModal from '../../modals/LaunchModal/LaunchModal';
import ModalBase from '../../modals/ModalBase';

export interface ICapsuleModalMissionProps {
    launchId: string
};

const CapsuleModalMission: React.FunctionComponent<ICapsuleModalMissionProps> = ({
    launchId
}) => {
    
    const [isModalShow, setIsModalShow] = useState(false);
    const {launch} = useTypedSelector(state => state.launch);
    const {fetchLaunchById} = useActions();

    useEffect(() => {
        fetchLaunchById(launchId);
    }, []);

    function OnClose() {
        setIsModalShow(false);
    }

    function OnOpen() {
        setIsModalShow(true);
    }
    
    return (
    <>
    <div className="modal__capsule__missions__item" onClick={OnOpen}>
        {launch?.flight_number} - Mission Details <i className="fa-solid fa-arrow-right"></i>
    </div>
    <ModalBase isOpen={isModalShow} OnClose={OnClose}>
        {
        launch
        ?
        <LaunchModal launch={launch}/>
        :
        <div></div>}
    </ModalBase>
    </>
    )
}
export default CapsuleModalMission;