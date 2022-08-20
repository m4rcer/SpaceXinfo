import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CapsuleType } from '../../../types/Capsules';
import Section from '../../UI/Section/Section';
import VehiclesList from '../../UI/VehiclesList/VehiclesList';

export interface IVehiclesPageProps {};

const VehiclesPage: React.FunctionComponent<IVehiclesPageProps> = props => {
    const {rockets} = useTypedSelector(state => state.rockets);
    const {fetchRockets} = useActions();
    const {capsules} = useTypedSelector(state => state.capsules);
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
        <VehiclesList rockets={rockets} capsules={capsules}/>
    </Section>);
}
export default VehiclesPage;