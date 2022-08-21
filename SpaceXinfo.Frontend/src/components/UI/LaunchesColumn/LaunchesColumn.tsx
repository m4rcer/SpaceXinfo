import React, { ReactNode } from 'react';
import { LaunchListVm, LaunchLookupDto } from '../../../api/api';
import { LaunchType } from '../../../types/Launches';
import Launch from '../Launch/Launch';

export interface ILaunchesColumnProps {
    children: ReactNode,
    launches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[],
    isTextRight?: boolean,
};

const LaunchesColumn: React.FunctionComponent<ILaunchesColumnProps> = ({
    children,
    launches,
    isTextRight,
    favouriteLaunches
}) => {

    const favouriteLaunchesIds = favouriteLaunches.map(
        (launch) => {
            return launch.favouriteLaunchId
        }
    );

    return (
        <div className={
            ["launches__column", isTextRight ? "text-right" : ""].join(" ")
            }>
            <div className="launches__column__title">
                {children}
            </div>

            <div className="launches__list">
                {
                    favouriteLaunches
                    ?
                    // launches.map((launch) => 
                    //     <Launch key={launch.id} launch={launch}
                    //     isFavourite={favouriteLaunchesIds
                    //     ? favouriteLaunchesIds?.includes(launch.flight_number) : false}/>
                    // )

                     launches.map((launch) => {
                        const index =
                        favouriteLaunchesIds
                        ? 
                        favouriteLaunchesIds?.findIndex(id => id === launch.flight_number)
                        :
                        -1;
                        
                        return <Launch key={launch.id} 
                        launch={launch}
                        isFavourite={
                        index>=0
                        ? 
                        true
                        : 
                        false}
                        favouriteId={
                            favouriteLaunches
                            ?
                            launches.at(index ? index : 0)?.id
                            :
                            ""}
                        />
                     })
                    :
                    launches.map((launch) => 
                        <Launch key={launch.id} launch={launch}
                        isFavourite={false}/>
                    )
                }
                
            </div>
        </div>
    )
}
export default LaunchesColumn;