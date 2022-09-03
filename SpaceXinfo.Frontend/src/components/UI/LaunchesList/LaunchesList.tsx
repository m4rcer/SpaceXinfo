import React, { Component } from 'react';
import { LaunchLookupDto } from '../../../api/api';
import { IAllLaunchesColumnProps } from '../../../hocs/UI/LaunchesColumn/withAllLaunchesColumn';
import { IFavLaunchesColumnProps } from '../../../hocs/UI/LaunchesColumn/withFavLaunchesColumn';
import { withAllLaunchesList } from '../../../hocs/UI/LaunchesList/withAllLaunchesList';
import { withFavLaunchesList } from '../../../hocs/UI/LaunchesList/withFavLaunchesList';
import { LaunchType } from '../../../types/Launches';

export interface ILaunchesListProps {
    upcomingLaunches: LaunchType[],
    pastLaunches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[],
    Component: React.ComponentType<IAllLaunchesColumnProps | IFavLaunchesColumnProps>
};

const LaunchesList: React.FunctionComponent<ILaunchesListProps> = ({
    upcomingLaunches,
    pastLaunches,
    favouriteLaunches,
    Component
}) => {
    
    return ( 
    <div className="launches">
        <Component favouriteLaunches={favouriteLaunches} 
        launches={upcomingLaunches} 
        isTextRight={true}>
            <i className="fa-regular fa-clock"></i> Upcoming
        </Component>

        <div className="launches__divider"></div>

        <Component favouriteLaunches={favouriteLaunches} 
        launches={pastLaunches}>
            <i className="fa-regular fa-circle-check"></i> Completed
        </Component>
    </div>)
}

export const AllLaunchesList = withAllLaunchesList(LaunchesList);
export const FavLaunchesList = withFavLaunchesList(LaunchesList);