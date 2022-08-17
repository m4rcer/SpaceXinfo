import React, { useState } from 'react';
import { CapsuleType } from '../../../types/Capsules';

export interface ICapsuleProps {
    capsule: CapsuleType
};

const Capsule: React.FunctionComponent<ICapsuleProps> = ({
    capsule
}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="vehicles__item">
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
            onClick={() => setIsOpen(!isOpen)}></i>
        </div>
        {
            isOpen
            ?
            <div className="vehicles__item__info">
                <div className="vehicles__item__info__characteristics">
                    <div className="vehicles__item__info__char">Status</div>
                    <div className="vehicles__item__info__char">Reuse Count</div>
                    <div className="vehicles__item__info__char">Water Landing</div>
                    <div className="vehicles__item__info__char">Land Landing</div>
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
    );
}
export default Capsule;