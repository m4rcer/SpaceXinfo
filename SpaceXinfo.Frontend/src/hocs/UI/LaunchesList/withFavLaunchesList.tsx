import { LaunchLookupDto } from "../../../api/api";
import { FavLaunchesColumn } from "../../../components/UI/LaunchesColumn/LaunchesColumn";
import { ILaunchesListProps } from "../../../components/UI/LaunchesList/LaunchesList";
import { LaunchType } from "../../../types/Launches";

export interface IFavLaunchesListProps {
    upcomingLaunches: LaunchType[],
    pastLaunches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[],
};

export function withFavLaunchesList(Component : React.ComponentType<ILaunchesListProps>) {
    return function (props: IFavLaunchesListProps) {
        
        const {upcomingLaunches, pastLaunches, favouriteLaunches} = props;
        
        return (
            <Component
            upcomingLaunches={upcomingLaunches}
            pastLaunches={pastLaunches}
            favouriteLaunches={favouriteLaunches}
            Component={FavLaunchesColumn}/>
        );
    }
}