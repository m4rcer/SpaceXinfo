import React, { useState } from 'react';
import { CapsuleType } from '../../../types/Capsules';
import { bodyClasses } from '../../../utils/bodyClasses';
import { addBodyClass, removeBodyClass } from '../../../utils/classes';
import CapsuleModal from '../../modals/CapsuleModal/CapsuleModal';
import ModalBase from '../../modals/ModalBase';

export interface ICapsuleProps {
    capsule: CapsuleType
};

const Capsule: React.FunctionComponent<ICapsuleProps> = ({
    capsule
}) => {

    const [isOpen, setIsOpen] = useState(false);
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
    <div className="vehicles__item" onClick={OnOpen}>
        <div className="vehicles__item__photo">
            <img src="./img/capsules/c101.jfif" alt=""/>
        </div>
        <div className="vehicles__item__header">
            <h3 className="vehicles__item__title">{capsule.serial} - {capsule.type}</h3>
            <i 
            className={["fa-solid fa-angle-down vehicles__item__angle",
            isOpen 
            ? 
            "vehicles__item__angle--up" 
            : 
            ""].join(" ")}
            onClick={(event) => {
                event.stopPropagation();
                setIsOpen(!isOpen)
            }}></i>
        </div>
        {
            isOpen
            ?
            <div className="vehicles__item__info">
                <div className="vehicles__item__info__characteristics">
                    <div className="vehicles__item__info__char">Status</div>
                    <div className="vehicles__item__info__char">Reuse Count</div>
                    <div className="vehicles__item__info__char">Water Landings</div>
                    <div className="vehicles__item__info__char">Land Landings</div>
                </div>

                <div className="vehicles__item__info__values">
                    <div className="vehicles__item__info__val">{capsule.status.toUpperCase()}</div>
                    <div className="vehicles__item__info__val">{capsule.reuse_count}</div>
                    <div className="vehicles__item__info__val">{capsule.water_landings}</div>
                    <div className="vehicles__item__info__val">{capsule.land_landings}</div>
                </div>
            </div>
            :
            <div></div>
        }
        <a className="vehicles__item__specs">
            <i className="fa-solid fa-circle-info"></i>
            Capsule Specs
        </a>
    </div>
    <ModalBase isOpen={isModalShow} OnClose={OnClose}>
        <CapsuleModal capsule={capsule}/>
    </ModalBase>
    </>
    );
}
export default Capsule;