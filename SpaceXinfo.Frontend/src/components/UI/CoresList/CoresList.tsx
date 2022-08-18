import React from 'react';
import { CoreType } from '../../../types/Cores';
import Core from '../Core/Core';

export interface ICoresListProps {
    cores: CoreType[]
};

const CoresList: React.FunctionComponent<ICoresListProps> = ({
    cores
}) => {
    return (
        <div className="cores">
            {cores.map((core) =>
                <Core core={core}/>
            )}
        </div>
    )
}
export default CoresList;