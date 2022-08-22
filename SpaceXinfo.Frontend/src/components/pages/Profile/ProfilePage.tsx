import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Client } from '../../../api/api';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { AppRoutes } from '../../../routes';
import Container from '../../UI/Container/Container';
import LaunchesList from '../../UI/LaunchesList/LaunchesList';
import Section from '../../UI/Section/Section';

export interface IProfilePageProps {};

const apiClient = new Client('https://localhost:44382');

const ProfilePage: React.FunctionComponent<IProfilePageProps> = props => {

    const {favouriteLaunches, favouriteLaunchesLoading} = useTypedSelector(state => state.favouriteLaunches);
    const {fetchFavouriteLaunches} = useActions();

    const {pastLaunches, pastLaunchesLoading} = useTypedSelector(state => state.pastLaunches);
    const {fetchPastLaunches} = useActions();

    const {upcomingLaunches, upcomingLaunchesLoading} = useTypedSelector(state => state.upcomingLaunches);
    const {fetchUpcomingLaunches} = useActions();

    useEffect(() => {
        document.title = "Profile - SpaceXinfo";
    }, []);

    useEffect(() => {
        fetchFavouriteLaunches(apiClient);
        fetchPastLaunches();
        fetchUpcomingLaunches();
    }, []);

    return (
    <Section title='My Launches'>
        <Container>
            <div className="user__buttons">
                <Link to={AppRoutes.Signout} className="user__logout">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
            </div>

            {   
                !pastLaunchesLoading && !upcomingLaunchesLoading && !favouriteLaunchesLoading 
                ?
                <LaunchesList pastLaunches={pastLaunches}
                upcomingLaunches={upcomingLaunches}
                favouriteLaunches={favouriteLaunches}
                isProfilePage={true}/>
                : <h1>Loading...</h1>
            }
        </Container>
    </Section>);
}
export default ProfilePage;