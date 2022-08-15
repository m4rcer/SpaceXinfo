import React from 'react';
import { LaunchListItemType } from '../../../types/Launches';
import LaunchesColumn from '../LaunchesColumn/LaunchesColumn';

export interface ILaunchesListProps {
    upcomingLaunches: LaunchListItemType[],
    pastLaunches: LaunchListItemType[]
};

const LaunchesList: React.FunctionComponent<ILaunchesListProps> = ({
    upcomingLaunches,
    pastLaunches
}) => {
    return ( 
    <div className="launches">
        <LaunchesColumn launches={upcomingLaunches} isTextRight={true}>
            <i className="fa-regular fa-clock"></i> Upcoming
        </LaunchesColumn>

        <div className="launches__divider"></div>

        <LaunchesColumn launches={pastLaunches}>
        <i className="fa-regular fa-circle-check"></i> Completed
        </LaunchesColumn>
    </div>)
}
export default LaunchesList;