import React, { useEffect } from 'react';
import { general_acronyms, fules_acronyms, orbits_acronyms } from '../../../data/acronyms';
import { bodyClasses } from '../../../utils/bodyClasses';
import { removeBodyClass } from '../../../utils/classes';
import AcronymsList from '../../UI/AcronymsList/AcronymsList';
import Container from '../../UI/Container/Container';
import Section from '../../UI/Section/Section';

export interface IAcronymsPageProps {};

const AcronymsPage: React.FunctionComponent<IAcronymsPageProps> = props => {

    useEffect(() => {
        document.title = "Acronyms - SpaceXinfo";
        removeBodyClass(bodyClasses.Background);
    }, []);

    return (
    <Section title='Acronyms'>
        <Container>
            <AcronymsList general_acronyms={general_acronyms}
            orbits_acronyms={orbits_acronyms}
            fules_acronyms={fules_acronyms}/>
        </Container>
    </Section>
    )
}
export default AcronymsPage;