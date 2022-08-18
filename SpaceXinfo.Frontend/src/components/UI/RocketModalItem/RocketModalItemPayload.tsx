import React from 'react';
import { RocketPayloadType } from '../../../types/Rockets';

export interface IRocketModalItemPayloadProps {
    payloadWeight: RocketPayloadType,
};

const RocketModalItemPayload: React.FunctionComponent<IRocketModalItemPayloadProps> = ({
    payloadWeight
}) => {
    return (
    <div className="modal__rocket__chars__info">
        <div className="modal__rocket__chars__info__row">
            <div className="modal__rocket__chars__info__row__item">Type</div>
            <div className="modal__rocket__chars__info__row__item text-right">{payloadWeight.name}</div>
        </div>
        <div className="modal__rocket__chars__info__row">
            <div className="modal__rocket__chars__info__row__item">Mass</div>
            <div className="modal__rocket__chars__info__row__item">{payloadWeight.kg}kg</div>
        </div>
    </div>
    );
}
export default RocketModalItemPayload;