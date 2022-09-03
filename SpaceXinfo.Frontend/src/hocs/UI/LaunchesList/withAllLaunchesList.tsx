import { LaunchLookupDto } from "../../../api/api";
import { AllLaunchesColumn } from "../../../components/UI/LaunchesColumn/LaunchesColumn";
import { ILaunchesListProps } from "../../../components/UI/LaunchesList/LaunchesList";
import { LaunchType } from "../../../types/Launches";

export interface IAllLaunchesListProps {
    upcomingLaunches: LaunchType[],
    pastLaunches: LaunchType[],
    favouriteLaunches: LaunchLookupDto[],
};

export function withAllLaunchesList(Component : React.ComponentType<ILaunchesListProps>) {
    return function (props: IAllLaunchesListProps) {
        
        const {upcomingLaunches, pastLaunches, favouriteLaunches} = props;

        return (
            <Component
            upcomingLaunches={upcomingLaunches}
            pastLaunches={pastLaunches}
            favouriteLaunches={favouriteLaunches}
            Component={AllLaunchesColumn}/>
        );
    }
}