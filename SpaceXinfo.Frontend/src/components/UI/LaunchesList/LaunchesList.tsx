import React from 'react';
import { LaunchListVm, LaunchLookupDto } from '../../../api/api';
import { LaunchType } from '../../../types/Launches';
import LaunchesColumn from '../LaunchesColumn/LaunchesColumn';

export interface ILaunchesListProps {
    upcomingLaunches: LaunchType[],
    pastLaunches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[]
};

const LaunchesList: React.FunctionComponent<ILaunchesListProps> = ({
    upcomingLaunches,
    pastLaunches,
    favouriteLaunches
}) => {
    return ( 
    <div className="launches">
        <LaunchesColumn favouriteLaunches={favouriteLaunches} launches={upcomingLaunches} isTextRight={true}>
            <i className="fa-regular fa-clock"></i> Upcoming
        </LaunchesColumn>

        <div className="launches__divider"></div>

        <LaunchesColumn favouriteLaunches={favouriteLaunches} launches={pastLaunches}>
        <i className="fa-regular fa-circle-check"></i> Completed
        </LaunchesColumn>
    </div>)
}
export default LaunchesList;