import React, { ReactNode } from 'react';
import { LaunchListItemType } from '../../../types/Launches';
import Launch from '../Launch/Launch';

export interface ILaunchesColumnProps {
    children: ReactNode,
    launches: LaunchListItemType[],
    isTextRight?: boolean,
};

const LaunchesColumn: React.FunctionComponent<ILaunchesColumnProps> = ({
    children,
    launches,
    isTextRight
}) => {
    return (
        <div className={
            ["launches__column", isTextRight ? "text-right" : ""].join(" ")
            }>
            <div className="launches__column__title">
                {children}
            </div>

            <div className="launches__list">
                {launches.map((launch) => 
                <Launch key={launch.id} launch={launch}/>)}
            </div>
        </div>
    )
}
export default LaunchesColumn;