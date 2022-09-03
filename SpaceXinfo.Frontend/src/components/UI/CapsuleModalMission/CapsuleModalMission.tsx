import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useModal } from '../../../hooks/useModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LaunchModal from '../../modals/LaunchModal/LaunchModal';
import ModalBase from '../../modals/ModalBase';

export interface ICapsuleModalMissionProps {
    launchId: string
};

const CapsuleModalMission: React.FunctionComponent<ICapsuleModalMissionProps> = ({
    launchId
}) => {
    
    const {launch} = useTypedSelector(state => state.launch);
    const {fetchLaunchById} = useActions();
    const {isModalShow, OnModalOpen, OnModalClose} = useModal();

    useEffect(() => {
        fetchLaunchById(launchId);
    }, []);
    
    return (
    <>
    <div className="modal__capsule__missions__item" onClick={OnModalOpen}>
        {launch?.flight_number} - Mission Details <i className="fa-solid fa-arrow-right"></i>
    </div>
    
    <ModalBase isOpen={isModalShow} OnClose={OnModalClose}>
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