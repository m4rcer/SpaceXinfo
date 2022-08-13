import React, { ReactNode } from 'react';
import Launch from '../Launch/Launch';
import { LaunchType } from '../Launch/LaunchType';

export interface ILaunchesColumnProps {
    children: ReactNode,
    launches: LaunchType[],
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
                <Launch launch={launch}/>)}
            </div>
        </div>
    )
}
export default LaunchesColumn;