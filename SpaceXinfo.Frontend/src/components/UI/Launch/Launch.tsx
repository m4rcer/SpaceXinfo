import React, { useState } from 'react';
import { Client, CreateLaunchDto } from '../../../api/api';
import { LaunchType } from '../../../types/Launches';
import { bodyClasses } from '../../../utils/bodyClasses';
import { addBodyClass, removeBodyClass } from '../../../utils/classes';
import { dateToCalendar, dateToString } from '../../../utils/date';
import LaunchModal from '../../modals/LaunchModal/LaunchModal';
import ModalBase from '../../modals/ModalBase';

export interface ILaunchProps {
    launch: LaunchType,
    isFavourite: boolean,
    favouriteId?: string
};

const apiClient = new Client('https://localhost:44382');

const Launch: React.FunctionComponent<ILaunchProps> = ({
    launch,
    isFavourite,
    favouriteId
}) => {

    const [isModalShow, setIsModalShow] = useState(false);
    const [favouriteLaunchId, setFavouriteLaunchId] = useState(favouriteId
        ? 
        favouriteId
        : 
        "");
    const [isFavouriteLaunch, setIsFavouriteLaunch] = useState(isFavourite);

    function OnClose() {
        setIsModalShow(false);
        removeBodyClass(bodyClasses.NoScroll);
    }

    function OnOpen() {
        setIsModalShow(true);
        addBodyClass(bodyClasses.NoScroll);
    }

    async function createFavouriteLaunch(launch: CreateLaunchDto) {
        setFavouriteLaunchId(await apiClient.launchPOST(launch));
    }

    async function deleteFavouriteLaunch(id: string) {
        await apiClient.launchDELETE(id);
    }

    function OnFavouriteClick() {        
        if(isFavouriteLaunch) {
            deleteFavouriteLaunch(favouriteLaunchId);
        }
        else {
            createFavouriteLaunch({
                favouriteLaunchId: launch.flight_number
            });
        }
        setIsFavouriteLaunch(!isFavouriteLaunch);
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
                        <a href={dateToCalendar(launch.date_utc, launch.name)}
                        target="_blank">
                            <i className="fa-solid fa-calendar-days"></i>
                        </a>
                    </div>
                    <div className={["launches__item__icon launches__item__icon--favourite",
                    isFavouriteLaunch ? "active" : ""].join(" ")}
                    onClick={e => {
                        e.stopPropagation();
                        OnFavouriteClick()
                        }}>
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