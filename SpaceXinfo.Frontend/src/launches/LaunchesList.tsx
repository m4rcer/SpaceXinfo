import React, { FC, ReactElement, useRef, useEffect, useState } from 'react';
import { CreateLaunchDto, Client, LaunchLookupDto } from '../api/api';
import { FormControl } from 'react-bootstrap';

const apiClient = new Client('https://localhost:44382');

async function createLaunch(launch: CreateLaunchDto) {
    await apiClient.launchPOST(launch);
    console.log('Launch is created.');
}

const LaunchesList: FC<{}> = (): ReactElement => {
    let textInput = useRef(null);
    const [launches, setLaunches] = useState<LaunchLookupDto[] | undefined>(undefined);

    async function getLaunches() {
        const launchListVm = await apiClient.launchesGET();
        setLaunches(launchListVm.launches);
    }

    useEffect(() => {
        setTimeout(getLaunches, 500);
    }, []);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const launch: CreateLaunchDto = {
                favouriteLaunchId: +event.currentTarget.value,
            };
            createLaunch(launch);
            event.currentTarget.value = '';
            setTimeout(getLaunches, 500);
        }
    };

    return (
        <div>
            Launches
            <div>
                <FormControl ref={textInput} onKeyPress={handleKeyPress} />
            </div>
            <section>
                {launches?.map((launch) => (
                    <div>{launch.favouriteLaunchId}</div>
                ))}
            </section>
        </div>
    );
};
export default LaunchesList;