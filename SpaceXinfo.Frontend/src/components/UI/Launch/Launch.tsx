import React, { useEffect, useState } from 'react';
import { Client, CreateLaunchDto } from '../../../api/api';
import { signinRedirect } from '../../../auth/user-service';
import { CLIENT } from '../../../data/client';
import { useModal } from '../../../hooks/useModal';
import { LaunchType } from '../../../types/Launches';
import { dateToCalendar, dateToString } from '../../../utils/date';
import { getIsAuth } from '../../../utils/storage';
import LaunchModal from '../../modals/LaunchModal/LaunchModal';
import ModalBase from '../../modals/ModalBase';

export interface ILaunchProps {
    launch: LaunchType,
    isFavourite: boolean,
    favouriteId?: string
};

const apiClient = new Client(CLIENT);

const Launch: React.FunctionComponent<ILaunchProps> = ({
    launch,
    isFavourite,
    favouriteId
}) => {

    const {isModalShow, OnModalOpen, OnModalClose} = useModal();
    const [favouriteLaunchId, setFavouriteLaunchId] = useState(favouriteId
        ? 
        favouriteId
        : 
        "");
    const [isFavouriteLaunch, setIsFavouriteLaunch] = useState(isFavourite);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(getIsAuth);
    }, [])

    async function createFavouriteLaunch(launch: CreateLaunchDto) {
        setFavouriteLaunchId(await apiClient.launchPOST(launch));
        console.log(favouriteLaunchId);
    }

    async function deleteFavouriteLaunch(id: string) {
        await apiClient.launchDELETE(id);
    }

    function OnFavouriteClick() { 
        if(!isAuth){
            signinRedirect();
            return
        }
        
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
        <div className="launches__item" onClick={OnModalOpen}>
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
        <ModalBase isOpen={isModalShow} OnClose={OnModalClose}>
            <LaunchModal launch={launch}/>
        </ModalBase>
        </>
    )
}
export default Launch;