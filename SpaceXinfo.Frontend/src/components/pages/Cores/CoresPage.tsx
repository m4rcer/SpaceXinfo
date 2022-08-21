import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CoreType } from '../../../types/Cores';
import Container from '../../UI/Container/Container';
import CoresList from '../../UI/CoresList/CoresList';
import Section from '../../UI/Section/Section';

export interface ICoresPageProps {};

const CoresPage: React.FunctionComponent<ICoresPageProps> = props => {

    const {cores} = useTypedSelector(state => state.cores);
    const {fetchCores} = useActions();

    useEffect(() => {
        document.title = "Cores - SpaceXinfo";
    }, []);

    useEffect(() => {
        fetchCores();
    }, []);

    return (
        <Section title='Cores'>
            <Container>
                <CoresList cores={cores}/>
            </Container>
        </Section>
    );
}
export default CoresPage;