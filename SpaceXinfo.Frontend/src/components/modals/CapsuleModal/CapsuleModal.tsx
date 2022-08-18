import React from 'react';
import { CapsuleType } from '../../../types/Capsules';
import CapsuleModalMission from '../../UI/CapsuleModalMission/CapsuleModalMission';

export interface ICapsuleModalProps {
    capsule: CapsuleType,
};

const CapsuleModal: React.FunctionComponent<ICapsuleModalProps> = ({
    capsule
}) => {
    return (
    <div className="modal__capsule">
        <div className="modal__capsule__photo">
            <img src="/img/capsules/c101.jfif" alt=""/>
            <div className="modal__capsule__photo__text">{capsule.serial}</div>
        </div>

        <div className="modal__capsule__header">
            <div className="modal__capsule__header__col">
                <div className="modal__capsule__header__info">Type</div>
                <div className="modal__capsule__header__title">{capsule.type}</div>
            </div>
            <div className="modal__capsule__header__col">
                <div className="modal__capsule__header__info
                modal__capsule__header__info--right">Status</div>
                <div className="modal__capsule__header__title">{capsule.status.toUpperCase()}</div>
            </div>
        </div>

        {
            capsule.last_update
            ?
            <div className="modal__capsule__description">
                {capsule.last_update}
            </div>
            :
            <div></div>
        }

        <div className="modal__capsule__info">
            <div className="modal__capsule__info__row">
                <div className="modal__capsule__info__row__item">Serial</div>
                <div className="modal__capsule__info__row__item">{capsule.serial}</div>
            </div>
            <div className="modal__capsule__info__row">
                <div className="modal__capsule__info__row__item">Reused</div>
                <div className="modal__capsule__info__row__item">{capsule.reuse_count}</div>
            </div>
            <div className="modal__capsule__info__row">
                <div className="modal__capsule__info__row__item">Water Landings</div>
                <div className="modal__capsule__info__row__item">{capsule.water_landings}</div>
            </div>
            <div className="modal__capsule__info__row">
                <div className="modal__capsule__info__row__item">Land Landings</div>
                <div className="modal__capsule__info__row__item">{capsule.land_landings}</div>
            </div>
        </div>

        <div className="modal__capsule__missions">
            <div className="modal__capsule__missions__title">Missions</div>
            <div className="modal__capsule__missions__content">
                {capsule.launches.map((launchId) =>
                    <CapsuleModalMission id={launchId}/>
                )}
            </div>
        </div>
    </div>
    );
}
export default CapsuleModal;