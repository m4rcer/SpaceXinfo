import React from 'react';
import { LaunchpadType } from '../../../types/Launchpads';

export interface ILaunchpadModalProps {
    launchpad: LaunchpadType,
};

const LaunchpadModal: React.FunctionComponent<ILaunchpadModalProps> = ({
    launchpad
}) => {
    return (
    <div className="modal__launchpad">
        <div className="modal__launchpad__header">
            <div className="modal__launchpad__region">
                {launchpad.region}, {launchpad.locality}
            </div>
            <div className="modal__launchpad__name">{launchpad.name}</div>
            <div className="modal__launchpad__coordinats">
                {launchpad.latitude}&deg;, {launchpad.longitude}&deg;
            </div>
        </div>
        <div className="modal__launchpad__text">
            {launchpad.details}
        </div>
        <div className="modal__launchpad__info">
            <div className="modal__launchpad__info__row">
                <div className="modal__launchpad__info__row__item">Status</div>
                <div className="modal__launchpad__info__row__item">{launchpad.status.toUpperCase()}</div>
            </div>
            <div className="modal__launchpad__info__row">
                <div className="modal__launchpad__info__row__item">Launch Attempts</div>
                <div className="modal__launchpad__info__row__item">{launchpad.launch_attempts}</div>
            </div>
            <div className="modal__launchpad__info__row">
                <div className="modal__launchpad__info__row__item">Launch Successes</div>
                <div className="modal__launchpad__info__row__item">{launchpad.launch_successes}</div>
            </div>
        </div>
    </div>
    );
}
export default LaunchpadModal;