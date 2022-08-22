import React from 'react';
import { LaunchListVm, LaunchLookupDto } from '../../../api/api';
import { LaunchType } from '../../../types/Launches';
import LaunchesColumn from '../LaunchesColumn/LaunchesColumn';

export interface ILaunchesListProps {
    upcomingLaunches: LaunchType[],
    pastLaunches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[],
    isProfilePage?: boolean
};

const LaunchesList: React.FunctionComponent<ILaunchesListProps> = ({
    upcomingLaunches,
    pastLaunches,
    favouriteLaunches,
    isProfilePage
}) => {
    return ( 
    <div className="launches">
        <LaunchesColumn favouriteLaunches={favouriteLaunches} 
        launches={upcomingLaunches} 
        isTextRight={true}
        isProfilePage={isProfilePage}>
            <i className="fa-regular fa-clock"></i> Upcoming
        </LaunchesColumn>

        <div className="launches__divider"></div>

        <LaunchesColumn favouriteLaunches={favouriteLaunches} 
        launches={pastLaunches}
        isProfilePage={isProfilePage}>
        <i className="fa-regular fa-circle-check"></i> Completed
        </LaunchesColumn>
    </div>)
}
export default LaunchesList;