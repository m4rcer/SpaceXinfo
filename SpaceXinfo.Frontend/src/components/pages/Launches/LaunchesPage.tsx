import React, { useEffect, useState } from 'react';
import { Client } from '../../../api/api';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getIsAuth } from '../../../utils/storage';
import LaunchesList from '../../UI/LaunchesList/LaunchesList';
import Loader from '../../UI/Loader/Loader';
import Section from '../../UI/Section/Section';

export interface ILaunchesPageProps {};

const apiClient = new Client('https://localhost:44382');

const LaunchesPage: React.FunctionComponent<ILaunchesPageProps> = props => {

    const [isAuth, setIsAuth] = useState(false);

    const {favouriteLaunches, favouriteLaunchesLoading} = useTypedSelector(state => state.favouriteLaunches);
    const {fetchFavouriteLaunches} = useActions();

    const {pastLaunches, pastLaunchesLoading} = useTypedSelector(state => state.pastLaunches);
    const {fetchPastLaunches} = useActions();

    const {upcomingLaunches, upcomingLaunchesLoading} = useTypedSelector(state => state.upcomingLaunches);
    const {fetchUpcomingLaunches} = useActions();

    useEffect(() => {
        document.title = "Launches - SpaceXinfo";
        setIsAuth(getIsAuth());
    }, []);

    useEffect(() => {
        fetchFavouriteLaunches(apiClient);
        fetchPastLaunches();
        fetchUpcomingLaunches();
    }, []);

    return (
    <Section title="Launches">

        {   !pastLaunchesLoading && !upcomingLaunchesLoading
            ?
                isAuth 
                ?
                    !favouriteLaunchesLoading 
                    ?
                    <LaunchesList pastLaunches={pastLaunches}
                    upcomingLaunches={upcomingLaunches}
                    favouriteLaunches={favouriteLaunches}/>
                    : <Loader/>
                :
                <LaunchesList pastLaunches={pastLaunches}
                upcomingLaunches={upcomingLaunches}
                favouriteLaunches={[]}/>
            :
            <Loader/>
        }
        
    </Section>)
}
export default LaunchesPage;