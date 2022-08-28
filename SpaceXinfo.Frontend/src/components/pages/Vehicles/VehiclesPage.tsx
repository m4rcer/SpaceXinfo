import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CapsuleType } from '../../../types/Capsules';
import Loader from '../../UI/Loader/Loader';
import Section from '../../UI/Section/Section';
import VehiclesList from '../../UI/VehiclesList/VehiclesList';

export interface IVehiclesPageProps {};

const VehiclesPage: React.FunctionComponent<IVehiclesPageProps> = props => {
    const {rockets, rocketsLoading} = useTypedSelector(state => state.rockets);
    const {fetchRockets} = useActions();
    const {capsules, capsulesLoading} = useTypedSelector(state => state.capsules);
    const {fetchCapsules} = useActions();

    useEffect(() => {
        document.title = "Vehicles - SpaceXinfo"
    }, [])

    useEffect(() => {
        fetchRockets();
        fetchCapsules();
    }, []);

    return (
    <Section title="Vehicles">

        {
            !rocketsLoading && !capsulesLoading
            ?
            <VehiclesList rockets={rockets} capsules={capsules}/>
            :
            <Loader/>
        }

    </Section>);
}
export default VehiclesPage;