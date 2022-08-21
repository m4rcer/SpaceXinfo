import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CoreListItemType, CoreType } from '../../../types/Cores';
import CoresModal from '../../modals/CoresModal/CoresModal';
import ModalBase from '../../modals/ModalBase';
import LaunchModalInfoItem from './LaunchModalInfoItem';

export interface ILaunchModalCoreProps {
    coreListItem: CoreListItemType,
};

const LaunchModalCore: React.FunctionComponent<ILaunchModalCoreProps> = ({
    coreListItem
}) => {
    const {core} = useTypedSelector(state => state.core);
    const {fetchCoreById} = useActions();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalShow, setIsModalShow] = useState(false);

    function OnClose() {
        setIsModalShow(false);
    }

    function OnOpen() {
        setIsModalShow(true);
    }

    useEffect(() => {
        fetchCoreById(coreListItem.core);
    }, [])

    return (
    <>
    <div className="modal__launch__char__item">
        <div className="modal__launch__char__header">
            <div className="modal__launch__char__header__title">
                {core ? core.serial : "Unknown"}
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
                <LaunchModalInfoItem title={"Flight"}>{coreListItem.flight}</LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Reused"}>
                    {
                        coreListItem.reused
                        ?
                        <i className="fa-solid fa-circle-check"></i>  
                        :
                        <i className="fa-solid fa-circle-xmark fail"></i>
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Landing Success"}>
                    {
                        coreListItem.landing_success
                        ?
                        <i className="fa-solid fa-circle-check"></i>  
                        :
                        <i className="fa-solid fa-circle-xmark fail"></i>
                    }
                </LaunchModalInfoItem>
                <LaunchModalInfoItem title={"Landing Type"}>
                    {
                        coreListItem.landing_type
                        ?
                        coreListItem.landing_type  
                        :
                        <i className="fa-solid fa-circle-xmark fail"></i>
                    }
                </LaunchModalInfoItem>
            </div>
            :
            <div></div>
        }
        <div className="modal__launch__char__specs">
            <div className="modal__launch__char__specs__item"
            onClick={OnOpen}>
                <i className="fa-solid fa-circle-info"></i> Specs
            </div>
        </div>
    </div>
    <ModalBase isOpen={isModalShow} OnClose={OnClose}>
        {
            core
            ?
            <CoresModal core={core}/>
            :
            <div></div>
        }
    </ModalBase>
    </>);
}
export default LaunchModalCore;