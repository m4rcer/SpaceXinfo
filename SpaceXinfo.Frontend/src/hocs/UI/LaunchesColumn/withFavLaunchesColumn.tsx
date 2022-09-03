import { ReactNode } from "react";
import { LaunchLookupDto } from "../../../api/api";
import Launch from "../../../components/UI/Launch/Launch";
import { ILaunchesColumnProps } from "../../../components/UI/LaunchesColumn/LaunchesColumn";
import { LaunchType } from "../../../types/Launches";

export interface IFavLaunchesColumnProps {
    children: ReactNode,
    launches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[],
    isTextRight?: boolean,
};

export function withFavLaunchesColumn(Component : React.ComponentType<ILaunchesColumnProps>) {
    return function (props: IFavLaunchesColumnProps) {
        
        const {children, launches, favouriteLaunches, isTextRight} = props;
        
        const favouriteLaunchesIds = favouriteLaunches.map(
            launch => launch.favouriteLaunchId
        );

        const launchComponents = launches.map((launch) => {
            const index = favouriteLaunchesIds?.findIndex(id => id === launch.flight_number);
            if(index >= 0) {
                return <Launch key={launch.id} launch={launch}
                isFavourite={true}
                favouriteId={favouriteLaunches.at(index)?.id}
            />
            }
            return
        });

        

        return (
            <Component launches={launchComponents}
            isTextRight={isTextRight}>
                {children}
            </Component>
        );
    }
}