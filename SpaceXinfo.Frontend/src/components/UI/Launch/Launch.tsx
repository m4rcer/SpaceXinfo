import React, { useState } from 'react';
import { LaunchType } from '../../../types/Launches';
import { bodyClasses } from '../../../utils/bodyClasses';
import { addBodyClass, removeBodyClass } from '../../../utils/classes';
import { dateToString } from '../../../utils/date';
import LaunchModal from '../../modals/LaunchModal/LaunchModal';
import ModalBase from '../../modals/ModalBase';

export interface ILaunchProps {
    launch: LaunchType
};

const Launch: React.FunctionComponent<ILaunchProps> = ({
    launch
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
        <div className="launches__item" onClick={OnOpen}>
            <div className="launches__item__column">
                <div className="launches__item__info">F-NR {launch.flight_number}</div>
                <div className="launches__item__title">{launch.name}</div>
                <div className="launches__item__date">{
                    dateToString(new Date(launch.date_utc))
                }</div>
            </div>
            <div className="launches__item__column launches__item__column--right">
                <div className="launches__item__info">Success</div>
                <div className="launches__item__title">{
                !launch.upcoming ?
                    launch.success 
                    ?
                    <i className="fa-solid fa-circle-check 
                    launches__success"></i>  
                    : 
                    <i className="fa-solid fa-circle-xmark 
                    launches__success 
                    launches__success--fail"></i>
                :
                "TBD"
                }</div>
                <div className="launches__item__icons">
                    <div className="launches__item__icon launches__item__icon--calendar"
                    onClick={e => e.stopPropagation()}>
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className="launches__item__icon launches__item__icon--favourite"
                    onClick={e => e.stopPropagation()}>
                        <i className="fa-solid fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
        <ModalBase isOpen={isModalShow} OnClose={OnClose}>
            <LaunchModal launch={launch}/>
        </ModalBase>
        </>
    )
}
export default Launch;