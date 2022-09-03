import React, { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CoreType } from '../../../types/Cores';
import Container from '../../UI/Container/Container';
import CoresList from '../../UI/CoresList/CoresList';
import Loader from '../../UI/Loader/Loader';
import Section from '../../UI/Section/Section';

export interface ICoresPageProps {};

const CoresPage: React.FunctionComponent<ICoresPageProps> = props => {

    const {cores, coresLoading} = useTypedSelector(state => state.cores);
    const {fetchCores} = useActions();

    useEffect(() => {
        document.title = "Cores - SpaceXinfo";
    }, []);

    useEffect(() => {
        fetchCores();
    }, []);

    return (
        <Section title='Cores'>

            {
                !coresLoading 
                ?
                <CoresList cores={cores}/>
                :
                <Loader/>
            }

        </Section>
    );
}
export default CoresPage;