import React from 'react';
import { withLaunchpadSpecs } from '../../../hocs/UI/LaunchSpecs/withLaunchpadSpecs';
import { withRocketSpecs } from '../../../hocs/UI/LaunchSpecs/withRocketSpecs';

export interface ILaunchSpecsProps {
    title: string,
    onModalOpen: () => void
};

const LaunchSpecs: React.FunctionComponent<ILaunchSpecsProps> = ({
    title,
    onModalOpen
}) => {
    return (
    <>
    <div className="modal__launch__specs__item"
    onClick={onModalOpen}>
        <i className="fa-solid fa-circle-info"></i> {title}
    </div>
    </>
    )
}

export const RocketSpecs = withRocketSpecs(LaunchSpecs);
export const LaunchpadSpecs = withLaunchpadSpecs(LaunchSpecs);