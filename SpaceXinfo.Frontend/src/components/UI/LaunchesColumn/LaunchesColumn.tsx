import React, { ReactNode } from 'react';
import { LaunchLookupDto } from '../../../api/api';
import { LaunchType } from '../../../types/Launches';
import Launch from '../Launch/Launch';

export interface ILaunchesColumnProps {
    children: ReactNode,
    launches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[],
    isTextRight?: boolean,
    isProfilePage?: boolean
};

const LaunchesColumn: React.FunctionComponent<ILaunchesColumnProps> = ({
    children,
    launches,
    isTextRight,
    favouriteLaunches,
    isProfilePage
}) => {

    const favouriteLaunchesIds = favouriteLaunches.map(
        (launch) => {
            return launch.favouriteLaunchId
        }
    );

    return (
        <div className={
        ["launches__column", isTextRight ? "text-right" : ""].join(" ")}>
            <div className="launches__column__title">
                {children}
            </div>

            {
            !isProfilePage
            ?
            <div className="launches__list">
                {
                    launches.map((launch) => {
                        const index = favouriteLaunchesIds?.findIndex(id => id === launch.flight_number);
                        return <Launch key={launch.id} launch={launch}
                        isFavourite={index >= 0}
                        favouriteId={favouriteLaunches.at(index)?.id}
                        />
                    })
                }
            </div>
            :
            <div className="launches__list">
                {
                    launches.map((launch) => {
                        const index = favouriteLaunchesIds?.findIndex(id => id === launch.flight_number);
                        if(index >= 0) {
                            return <Launch key={launch.id} launch={launch}
                            isFavourite={true}
                            favouriteId={favouriteLaunches.at(index)?.id}
                        />
                        }
                        return
                    })
                }
            </div>
            }
        </div>
    )
}
export default LaunchesColumn;