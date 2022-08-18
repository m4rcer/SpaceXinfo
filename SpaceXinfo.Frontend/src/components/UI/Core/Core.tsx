import React, { useState } from 'react';
import { CoreType } from '../../../types/Cores';
import { bodyClasses } from '../../../utils/bodyClasses';
import { addBodyClass, removeBodyClass } from '../../../utils/classes';
import CoresModal from '../../modals/CoresModal/CoresModal';
import ModalBase from '../../modals/ModalBase';

export interface ICoreProps {
    core: CoreType
};

const Core: React.FunctionComponent<ICoreProps> = ({
    core
}) => {

    const [isModalShow, setIsModalShow] = useState(false);

    function OnClose() {
        setIsModalShow(false);
        removeBodyClass(bodyClasses.NoScroll);
    }

    function OnOpen() {
        setIsModalShow(true);
        addBodyClass(bodyClasses.NoScroll);
    }

    return (
    <>
    <div className="cores__item" onClick={OnOpen}>
        <div>
            <div className="cores__item__header">
                <div className="cores__name">{core.serial}</div>
                <div className="cores__type">
                    <div className="cores__block">Block</div>
                    <div className="cores__type__name">
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
            <div className="cores__text">{core.last_update}</div>
        </div>

        <div>
            <hr className="cores__breaker"/>
            <div className="cores__info">
                <div className="cores__info__col">
                    <div className="cores__info__item">RTLS landings</div>
                    <div className="cores__info__item">ASDS landings</div>
                </div>
                <div className="cores__info__col">
                    <div className="cores__info__item">{core.rtls_landings}/{core.rtls_attempts}</div>
                    <div className="cores__info__item">{core.asds_landings}/{core.asds_attempts}</div>
                </div>
            </div>
            <hr className="cores__breaker"/>

            <div className="cores__item__specs">
                <i className="fa-solid fa-circle-info"></i> Specs
            </div>
        </div>
    </div>
    <ModalBase isOpen={isModalShow} OnClose={OnClose}>
        <CoresModal core={core}/>
    </ModalBase>
    </>
    );
}
export default Core;