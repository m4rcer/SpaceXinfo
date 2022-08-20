import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LaunchesList from '../../UI/LaunchesList/LaunchesList';
import Section from '../../UI/Section/Section';

export interface ILaunchesPageProps {};

const LaunchesPage: React.FunctionComponent<ILaunchesPageProps> = props => {

    const {pastLaunches} = useTypedSelector(state => state.pastLaunches);
    const {fetchPastLaunches} = useActions();

    const {upcomingLaunches} = useTypedSelector(state => state.upcomingLaunches);
    const {fetchUpcomingLaunches} = useActions();

    useEffect(() => {
        document.title = "Launches - SpaceXinfo";
    }, []);

    useEffect(() => {
        fetchPastLaunches();
        fetchUpcomingLaunches();
    }, []);

    return (
    <Section title="Launches">
        <LaunchesList pastLaunches={pastLaunches}
        upcomingLaunches={upcomingLaunches}/>
    </Section>)
}
export default LaunchesPage;