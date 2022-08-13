import React from 'react';
import { LaunchType } from '../Launch/LaunchType';
import LaunchesColumn from '../LaunchesColumn/LaunchesColumn';

export interface ILaunchesListProps {
    upcomingLaunches: LaunchType[],
    pastLaunches: LaunchType[]
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