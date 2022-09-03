import React, { useEffect, useState } from 'react';
import { Client } from '../../../api/api';
import { CLIENT } from '../../../data/client';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { AllLaunchesList } from '../../UI/LaunchesList/LaunchesList';
import Loader from '../../UI/Loader/Loader';
import Section from '../../UI/Section/Section';

export interface ILaunchesPageProps {};

const apiClient = new Client(CLIENT);

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
            !favouriteLaunchesLoading && !pastLaunchesLoading && !upcomingLaunchesLoading
            ?
            <AllLaunchesList pastLaunches={pastLaunches}
            upcomingLaunches={upcomingLaunches}
            favouriteLaunches={favouriteLaunches}/>
            :
            <Loader/>
        }
        
    </Section>)
}
export default LaunchesPage;