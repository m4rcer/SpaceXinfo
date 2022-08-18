import React from 'react';
import { CoreType } from '../../../types/Cores';

export interface ICoresModalProps {
    core: CoreType,
};

const CoresModal: React.FunctionComponent<ICoresModalProps> = ({
    core
}) => {
    return (
    <div className="modal__cores">
        <div className="modal__cores__header">
            <div className="modal__cores__col">
                <div className="modal__cores__header__info">Core Serial</div>
                <div className="modal__cores__header__title">{core.serial}</div>
            </div>

            <div className="modal__cores__col
            modal__cores__col--right">
                <div className="modal__cores__header__info">Block</div>
                <div className="modal__cores__header__title">
                {
                    core.block
                    ?
                    core.block
                    :
                    "TBD"
                }
                </div>
            </div>
        </div>

        <div className="modal__cores__text">
            {core.last_update}
        </div>

        <div className="modal__cores__info">
            <div className="modal__cores__info__row">
                <div className="modal__cores__info__item">Status</div>    
                <div className="modal__cores__info__item">
                    {core.status.toUpperCase()}
                </div>    
            </div>
            <div className="modal__cores__info__row">
                <div className="modal__cores__info__item">Flights</div>    
                <div className="modal__cores__info__item">{core.launches.length}</div>    
            </div>
            <div className="modal__cores__info__row">
                <div className="modal__cores__info__item">RTLS attempts</div>    
                <div className="modal__cores__info__item">
                    {core.rtls_attempts}
                </div>    
            </div>
            <div className="modal__cores__info__row">
                <div className="modal__cores__info__item">RTLS landings</div>    
                <div className="modal__cores__info__item">{core.rtls_landings}</div>    
            </div>
            <div className="modal__cores__info__row">
                <div className="modal__cores__info__item">ASDS attempts</div>    
                <div className="modal__cores__info__item">
                    {core.asds_attempts}
                </div>    
            </div>
            <div className="modal__cores__info__row">
                <div className="modal__cores__info__item">ASDS landings</div>    
                <div className="modal__cores__info__item">{core.asds_landings}</div>    
            </div>
        </div>
    </div>
    );
}
export default CoresModal;