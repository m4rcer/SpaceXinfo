import React from 'react';
import { AcronymType } from '../../../types/Acronym';

export interface IAcronymProps {
    acronym: AcronymType
};

const Acronym: React.FunctionComponent<IAcronymProps> = ({
    acronym
}) => {
    return (
    <div className="acronyms__item">
        <div className="acronyms__abbr">{acronym.abbr}</div>
        <div className="acronyms__content">
            <div className="acronyms__name">{acronym.name}</div>
            <div className="acronyms__text">{acronym.text}</div>
        </div>
    </div>
    )
}
export default Acronym;