import React, { ReactNode } from 'react';
import { LaunchLookupDto } from '../../../api/api';
import { withAllLaunchesColumn } from '../../../hocs/UI/LaunchesColumn/withAllLaunchesColumn';
import { withFavLaunchesColumn } from '../../../hocs/UI/LaunchesColumn/withFavLaunchesColumn';

export interface ILaunchesColumnProps {
    children: ReactNode,
    launches: ReactNode,
    isTextRight?: boolean
};

const LaunchesColumn: React.FunctionComponent<ILaunchesColumnProps> = ({
    children,
    launches,
    isTextRight,
}) => {

    return (
        <div className={
        ["launches__column", isTextRight ? "text-right" : ""].join(" ")}>
            <div className="launches__column__title">
                {children}
            </div>

            <div className="launches__list">
                {launches}
            </div>
        </div>
    )
}
export const AllLaunchesColumn = withAllLaunchesColumn(LaunchesColumn);
export const FavLaunchesColumn = withFavLaunchesColumn(LaunchesColumn);