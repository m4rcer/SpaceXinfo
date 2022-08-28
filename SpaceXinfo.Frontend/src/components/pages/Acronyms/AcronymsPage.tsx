import React, { useEffect } from 'react';
import { general_acronyms, fules_acronyms, orbits_acronyms } from '../../../data/acronyms';
import AcronymsList from '../../UI/AcronymsList/AcronymsList';
import Container from '../../UI/Container/Container';
import Section from '../../UI/Section/Section';

export interface IAcronymsPageProps {};

const AcronymsPage: React.FunctionComponent<IAcronymsPageProps> = props => {

    useEffect(() => {
        document.title = "Acronyms - SpaceXinfo";
    }, []);

    return (
    <Section title='Acronyms'>
        <AcronymsList general_acronyms={general_acronyms}
        orbits_acronyms={orbits_acronyms}
        fules_acronyms={fules_acronyms}/>
    </Section>
    )
}
export default AcronymsPage;