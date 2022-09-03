import React from 'react';
import { CapsuleType } from '../../../types/Capsules';
import { RocketType } from '../../../types/Rockets';
import VehiclesColumn from '../VehiclesColumn/VehiclesColumn';
import { Capsule, Rocket } from '../VehiclesItem/VehiclesItem';

export interface IVehiclesListProps {
    rockets: RocketType[],
    capsules: CapsuleType[]
};

const VehiclesList: React.FunctionComponent<IVehiclesListProps> = ({
    rockets,
    capsules
}) => {
    return (
    <div className="vehicles">
        <VehiclesColumn title="Rockets">
        {
            rockets.map((rocket) => 
                <Rocket key={rocket.id} rocket={rocket}/>
            )
        }
        </VehiclesColumn>
        <div className="vehicles__divider"></div>
        <VehiclesColumn title="Capsules">
        {
            capsules.map((capsule) =>
                <Capsule key={capsule.id} capsule={capsule}/>
            )
        }
        </VehiclesColumn>
    </div>
    )
}
export default VehiclesList;