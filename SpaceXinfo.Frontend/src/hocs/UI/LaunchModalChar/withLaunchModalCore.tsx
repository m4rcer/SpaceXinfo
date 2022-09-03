import React, { useEffect, useState } from "react";
import CoresModal from "../../../components/modals/CoresModal/CoresModal";
import ModalBase from "../../../components/modals/ModalBase";
import { ILaunchModalCharProps } from "../../../components/UI/LaunchModalChar/LaunchModalChar";
import LaunchModalInfoItem from "../../../components/UI/LaunchModalChar/LaunchModalCharItem";
import { useActions } from "../../../hooks/useActions";
import { useModal } from "../../../hooks/useModal";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { CoreListItemType } from "../../../types/Cores";

export interface ILaunchModalCoreProps {
    coreListItem: CoreListItemType,
};

export function withLaunchModalCore(Component : React.ComponentType<ILaunchModalCharProps>) {
   
    return function (props: ILaunchModalCoreProps) {
        const {coreListItem} = props;
        const {core} = useTypedSelector(state => state.core);
        const {fetchCoreById} = useActions();
        const {isModalShow, OnModalOpen, OnModalClose} = useModal();

        useEffect(() => {
            fetchCoreById(coreListItem.core);
        }, [])

        return (
        <>
            <Component
            title={core ? core.serial : "Unknown"}
            onModalOpen={OnModalOpen}>
                
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

            </Component>

            <ModalBase isOpen={isModalShow} OnClose={OnModalClose}>
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
}