import React from 'react';
import { AcronymType } from '../../../types/Acronym';
import Acronym from '../Acronym/Acronym';

export interface IAcronymsSectionProps {
    title: string,
    acronyms: AcronymType[]
};

const AcronymsSection: React.FunctionComponent<IAcronymsSectionProps> = ({
    title,
    acronyms
}) => {
    return (
    <div className="acronyms__section">
        <div className="acronyms__section__title">{title}</div>

        <div className="acronyms__section__content">
            {acronyms.map((acronym) =>
                <Acronym acronym={acronym}/>
            )}
        </div>
    </div>
    )
}
export default AcronymsSection;