import { title } from 'process';
import React, { ReactNode, useEffect } from 'react';
import { withLaunchModalCore } from '../../../hocs/UI/LaunchModalChar/withLaunchModalCore';
import { withLaunchModalPayload } from '../../../hocs/UI/LaunchModalChar/withLaunchModalPayload';
import { useOpen } from '../../../hooks/useOpen';

export interface ILaunchModalCharProps {
    children: ReactNode[],
    title: string,
    onModalOpen?: () => void
};

const LaunchModalChar: React.FunctionComponent<ILaunchModalCharProps> = ({
    children,
    title,
    onModalOpen
}) => {

    const {isOpen, OnOpenClick} = useOpen();

    return (
    <div className="modal__launch__char__item">
        <>
        <div className="modal__launch__char__header" 
        onClick={OnOpenClick}>
            <div className="modal__launch__char__header__title">
                {title}
            </div>
            <div className="modal__launch__char__header__angle">
                <i className={["fa-solid fa-angle-down",
                "modal__launch__angle",
                isOpen ? "modal__launch__angle--up" : ""].join(" ")}></i>
            </div>
        </div>

        {
            isOpen
            ?
            <div className="modal__launch__char__info">
                {children}
            </div>
            :
            <div/>
        }

        {
            onModalOpen
            ?
            <div className="modal__launch__char__specs">
                <div className="modal__launch__char__specs__item"
                 onClick={onModalOpen}>
                     <i className="fa-solid fa-circle-info"></i> Specs
                 </div>
            </div>
            :
            <div/>
        }
        </>
    </div>);
}

export const LaunchModalCore = withLaunchModalCore(LaunchModalChar);
export const LaunchModalPayload = withLaunchModalPayload(LaunchModalChar);
