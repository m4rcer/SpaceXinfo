import React from 'react';
import { RocketType } from '../../../types/Rockets';
import RocketModalItem from '../../UI/RocketModalItem/RocketModalItem';
import RocketModalItemMetrics from '../../UI/RocketModalItem/RocketModalItemMetrics';
import RocketModalItemPayload from '../../UI/RocketModalItem/RocketModalItemPayload';

export interface IRocketModalProps {
    rocket: RocketType | null
};

const RocketModal: React.FunctionComponent<IRocketModalProps> = ({
    rocket
}) => {
    return (
    <div className="modal__rocket">
        <div className="modal__rocket__photo">
            <img src={rocket?.flickr_images[0]} alt=""/>
            <div className="modal__rocket__photo__title">{rocket?.name}</div>
        </div>

        <div className="modal__rocket__header">
            <div className="modal__rocket__header__item">
                <div className="modal__rocket__header__info">Type</div>
                <div className="modal__rocket__header__title">{rocket?.name}</div>
                <div className="modal__rocket__header__date">
                    {rocket?.first_flight.replaceAll("-", ".")}
                </div>
            </div>

            <div className="modal__rocket__header__item
            modal__rocket__header__item--right">
                <div className="modal__rocket__header__info">Active</div>
                <div className="modal__rocket__header__title">
                    {
                        rocket?.active
                        ?
                        <i className="fa-solid fa-circle-check"></i>
                        :
                        <i className="fa-solid fa-circle-xmark fail"></i>
                    }
                </div>
            </div>
        </div>

        <div className="modal__rocket__text">
            {rocket?.description}
        </div>

        <div className="modal__rocket__info">
            <div className="modal__rocket__info__col">
                <div className="modal__rocket__info__item">Company</div>
                <div className="modal__rocket__info__item">Country</div>
                <div className="modal__rocket__info__item">Cost per launch</div>
                <div className="modal__rocket__info__item">Succes rate</div>
            </div>
            <div className="modal__rocket__info__col 
            modal__rocket__info__col--right">
                <div className="modal__rocket__info__item">{rocket?.company}</div>
                <div className="modal__rocket__info__item">United States</div>
                <div className="modal__rocket__info__item">$ 
                {
                    Intl.NumberFormat('en-US').format(
                        rocket?.cost_per_launch ? rocket.cost_per_launch : 0
                )}
                </div>
                <div className="modal__rocket__info__item">{rocket?.success_rate_pct}%</div>
            </div>
        </div>

        <div className="modal__rocket__chars">
            <RocketModalItem title="Metrics">
                <RocketModalItemMetrics rocket={rocket}/>
            </RocketModalItem>

            {
                rocket?.payload_weights.map((payloadWeight) =>
                    <RocketModalItem key={payloadWeight.id} title={payloadWeight.id.toUpperCase()}>
                        <RocketModalItemPayload payloadWeight={payloadWeight}/>
                    </RocketModalItem>
                )
            }
        </div>
    </div>
    );
}
export default RocketModal;