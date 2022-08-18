import React, { useState } from 'react';
import { RocketType } from '../../../types/Rockets';
import { bodyClasses } from '../../../utils/bodyClasses';
import { addBodyClass, removeBodyClass } from '../../../utils/classes';
import ModalBase from '../../modals/ModalBase';
import RocketModal from '../../modals/RocketModal/RocketModal';

export interface IRocketProps {
    rocket: RocketType
};

const Rocket: React.FunctionComponent<IRocketProps> = ({
    rocket
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
            <img src={rocket.flickr_images[0]} alt=""/>
        </div>
        <div className="vehicles__item__header">
            <h3 className="vehicles__item__title">{rocket.name}</h3>
            <i 
            className={["fa-solid fa-angle-down vehicles__item__angle",
            isOpen 
            ? 
            "vehicles__item__angle--up" 
            : 
            ""].join(" ")}
            onClick={(event) => {
                event.stopPropagation();
                setIsOpen(!isOpen);
            }}></i>
        </div>
        {
            isOpen
            ?
            <div className="vehicles__item__text">{rocket.description}</div>
            :
            <div></div>
        }
        <a className="vehicles__item__specs">
            <i className="fa-solid fa-circle-info"></i> 
            Rocket Specs
        </a>
    </div>
    <ModalBase isOpen={isModalShow} OnClose={OnClose}>
        <RocketModal rocket={rocket}/>
    </ModalBase>
    </>
    );
}
export default Rocket;