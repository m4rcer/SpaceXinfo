import { ReactNode } from "react";
import { LaunchLookupDto } from "../../../api/api";
import Launch from "../../../components/UI/Launch/Launch";
import { ILaunchesColumnProps } from "../../../components/UI/LaunchesColumn/LaunchesColumn";
import { LaunchType } from "../../../types/Launches";

export interface IAllLaunchesColumnProps {
    children: ReactNode,
    launches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[],
    isTextRight?: boolean,
};

export function withAllLaunchesColumn(Component : React.ComponentType<ILaunchesColumnProps>) {
    return function (props: IAllLaunchesColumnProps) {
        
        const {children, launches, favouriteLaunches, isTextRight} = props;
        
        const favouriteLaunchesIds = favouriteLaunches.map(
            launch => launch.favouriteLaunchId
        );

        const launchComponents = launches.map((launch) => {
            const index = favouriteLaunchesIds?.findIndex(id => id === launch.flight_number);
            return <Launch key={launch.id} launch={launch}
            isFavourite={index >= 0}
            favouriteId={favouriteLaunches.at(index)?.id}
            />
        })

        return (
            <Component launches={launchComponents}
            isTextRight={isTextRight}>
                {children}
            </Component>
        );
    }
}