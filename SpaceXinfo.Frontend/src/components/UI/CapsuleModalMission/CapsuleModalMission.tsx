import React, { useEffect, useState } from 'react';
import { fetchLaunchById } from '../../../api/spacexdata/launches';
import { LaunchType } from '../../../types/Launches';
import LaunchModal from '../../modals/LaunchModal/LaunchModal';
import ModalBase from '../../modals/ModalBase';

export interface ICapsuleModalMissionProps {
    id: string
};

const CapsuleModalMission: React.FunctionComponent<ICapsuleModalMissionProps> = ({
    id
}) => {
    
    const [isModalShow, setIsModalShow] = useState(false);
    const [launch, setLaunch] = useState<LaunchType | null>(null);

    async function getLaunch(id: string) {
        var launch = await fetchLaunchById(id);
        setLaunch(launch);
    }

    useEffect(() => {
        getLaunch(id);
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