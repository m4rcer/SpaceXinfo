import React, { useEffect, useState } from 'react';
import { fetchPastLaunches, fetchUpcomingLaunches } from '../../../api/spacexdata/launches';
import { bodyClasses } from '../../../utils/bodyClasses';
import { removeBodyClass } from '../../../utils/classes';
import LaunchesList from '../../UI/LaunchesList/LaunchesList';
import Section from '../../UI/Section/Section';

export interface ILaunchesPageProps {};

const LaunchesPage: React.FunctionComponent<ILaunchesPageProps> = props => {

    const [upcomingLaunches, setUpcomingLaunches] = useState<any>([]);
    const [pastLaunches, setPastLaunches] = useState<any>([]);

    useEffect(() => {
        document.title = "Launches - SpaceXinfo";
        removeBodyClass(bodyClasses.Background);
    }, []);

    async function getLaunches() {
        const pastLaunches = await fetchPastLaunches();
        setPastLaunches(pastLaunches.reverse());
        const upcomingLaunches = await fetchUpcomingLaunches();
        setUpcomingLaunches(upcomingLaunches);
    }

    useEffect(() => {
        getLaunches();
    }, []);

    return (
    <Section title="Launches">
        <LaunchesList pastLaunches={pastLaunches}
        upcomingLaunches={upcomingLaunches}/>
    </Section>)
}
export default LaunchesPage;