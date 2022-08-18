import React from 'react';
import { RocketType } from '../../../types/Rockets';

export interface IRocketModalItemMetricsProps {
    rocket: RocketType
};

const RocketModalItemMetrics: React.FunctionComponent<IRocketModalItemMetricsProps> = ({
    rocket
}) => {
    return (
        <div className="modal__rocket__chars__info">
            <div className="modal__rocket__chars__info__row">
                <div className="modal__rocket__chars__info__row__item">Height</div>
                <div className="modal__rocket__chars__info__row__item">{rocket.height.meters}m</div>
            </div>
            <div className="modal__rocket__chars__info__row">
                <div className="modal__rocket__chars__info__row__item">Diameter</div>
                <div className="modal__rocket__chars__info__row__item">{rocket.diameter.meters}m</div>
            </div>
            <div className="modal__rocket__chars__info__row">
                <div className="modal__rocket__chars__info__row__item">Mass</div>
                <div className="modal__rocket__chars__info__row__item">{rocket.mass.kg}kg</div>
            </div>
        </div>
    );
}
export default RocketModalItemMetrics;