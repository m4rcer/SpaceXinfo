import React, { useEffect } from 'react';
import { bodyClasses } from '../../../utils/bodyClasses';
import { removeBodyClass } from '../../../utils/classes';

export interface ILaunchesPageProps {};

const LaunchesPage: React.FunctionComponent<ILaunchesPageProps> = props => {
    
    useEffect(() => {
        document.title = "Launches - SpaceXinfo";
        removeBodyClass(bodyClasses.Background);
    }, []);

    return <div></div>
}
export default LaunchesPage;