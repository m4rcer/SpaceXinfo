import React from 'react';
import { AcronymType } from '../../../types/Acronym';
import AcronymsSection from '../AcronymsSection/AcronymsSection';

export interface IAcronymsListProps {
    general_acronyms: AcronymType[],
    orbits_acronyms: AcronymType[],
    fules_acronyms: AcronymType[]
};

const AcronymsList: React.FunctionComponent<IAcronymsListProps> = ({
    general_acronyms,
    orbits_acronyms,
    fules_acronyms
}) => {
    return (
    <div className="acronyms">
        <AcronymsSection title="General Acronyms"
        acronyms={general_acronyms}/>

        <AcronymsSection title="Orbits / Orbital Maneuvers"
        acronyms={orbits_acronyms}/>

        <AcronymsSection title="Fuels / Propellants"
        acronyms={fules_acronyms}/>
    </div>
    );
}
export default AcronymsList;