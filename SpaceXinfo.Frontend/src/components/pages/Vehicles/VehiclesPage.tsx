import React, { useEffect, useState } from 'react';
import { fetchCapsules } from '../../../api/spacexdata/capsules';
import { fetchRockets } from '../../../api/spacexdata/rockets';
import { CapsuleType } from '../../../types/Capsules';
import { RocketType } from '../../../types/Rockets';
import { bodyClasses } from '../../../utils/bodyClasses';
import { removeBodyClass } from '../../../utils/classes';
import Section from '../../UI/Section/Section';
import VehiclesList from '../../UI/VehiclesList/VehiclesList';

export interface IVehiclesPageProps {};

const VehiclesPage: React.FunctionComponent<IVehiclesPageProps> = props => {
    const [rockets, setRockets] = useState<RocketType[]>([]);
    const [capsules, setCapsules] = useState<CapsuleType[]>([]);

    useEffect(() => {
        document.title = "Vehicles - SpaceXinfo"
        removeBodyClass(bodyClasses.Background);
    }, [])

    async function getRockets() {
        const rockets = await fetchRockets();
        setRockets(rockets.reverse());
    }

    async function getCapsules() {
        const capsules = await fetchCapsules();
        setCapsules(capsules.reverse());
    }

    useEffect(() => {
        getRockets();
        getCapsules();
    }, []);

    return (
    <Section title="Vehicles">
        <VehiclesList rockets={rockets} capsules={capsules}/>
    </Section>);
}
export default VehiclesPage;