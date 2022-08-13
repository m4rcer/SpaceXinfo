import React from 'react';
import { LaunchType } from './LaunchType';

export interface ILaunchProps {
    launch: LaunchType
};

const Launch: React.FunctionComponent<ILaunchProps> = ({
    launch
}) => {

    return (
    <div className="launches__item">
        <div className="launches__item__column">
            <div className="launches__item__info">F-NR {launch.flight_number}</div>
            <div className="launches__item__title">{launch.name}</div>
            <div className="launches__item__date">{new Date(launch.date_utc).toDateString()}</div>
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
                <div className="launches__item__icon launches__item__icon--calendar">
                    <i className="fa-solid fa-calendar-days"></i>
                </div>
                <div className="launches__item__icon launches__item__icon--favourite">
                    <i className="fa-solid fa-heart"></i>
                </div>
            </div>
        </div>
    </div>)
}
export default Launch;