import React, { useState } from 'react';
import { RocketType } from '../../../types/Rockets';

export interface IRocketProps {
    rocket: RocketType
};

const Rocket: React.FunctionComponent<IRocketProps> = ({
    rocket
}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="vehicles__item">
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
            onClick={() => setIsOpen(!isOpen)}></i>
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
    );
}
export default Rocket;