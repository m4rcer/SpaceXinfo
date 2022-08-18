import React, { useEffect, useState } from 'react';
import { fetchCores } from '../../../api/spacexdata/cores';
import { CoreType } from '../../../types/Cores';
import { bodyClasses } from '../../../utils/bodyClasses';
import { removeBodyClass } from '../../../utils/classes';
import Container from '../../UI/Container/Container';
import CoresList from '../../UI/CoresList/CoresList';
import Section from '../../UI/Section/Section';

export interface ICoresPageProps {};

const CoresPage: React.FunctionComponent<ICoresPageProps> = props => {

    const [cores, setCores] = useState<CoreType[]>([]);

    async function getCores() {
        const cores = await fetchCores();
        setCores(cores.reverse());
    }

    useEffect(() => {
        document.title = "Cores - SpaceXinfo";
        removeBodyClass(bodyClasses.Background);
    }, []);

    useEffect(() => {
        getCores();
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