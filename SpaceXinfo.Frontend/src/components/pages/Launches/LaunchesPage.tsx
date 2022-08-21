import React, { useEffect, useState } from 'react';
import { Client } from '../../../api/api';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LaunchesList from '../../UI/LaunchesList/LaunchesList';
import Section from '../../UI/Section/Section';

export interface ILaunchesPageProps {};

const apiClient = new Client('https://localhost:44382');

const LaunchesPage: React.FunctionComponent<ILaunchesPageProps> = props => {

    const {favouriteLaunches, favouriteLaunchesLoading} = useTypedSelector(state => state.favouriteLaunches);
    const {fetchFavouriteLaunches} = useActions();

    const {pastLaunches, pastLaunchesLoading} = useTypedSelector(state => state.pastLaunches);
    const {fetchPastLaunches} = useActions();

    const {upcomingLaunches, upcomingLaunchesLoading} = useTypedSelector(state => state.upcomingLaunches);
    const {fetchUpcomingLaunches} = useActions();

    useEffect(() => {
        document.title = "Launches - SpaceXinfo";
    }, []);

    useEffect(() => {
        fetchFavouriteLaunches(apiClient);
        fetchPastLaunches();
        fetchUpcomingLaunches();
    }, []);

    return (
    <Section title="Launches">

        {
            !favouriteLaunchesLoading
            ?
            <LaunchesList pastLaunches={pastLaunches}
            upcomingLaunches={upcomingLaunches}
            favouriteLaunches={favouriteLaunches}/>
            : <h1>Loading...</h1>
        }
        
    </Section>)
}
export default LaunchesPage;