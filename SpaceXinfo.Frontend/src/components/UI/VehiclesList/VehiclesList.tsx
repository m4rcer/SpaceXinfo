import React from 'react';
import { CapsuleType } from '../../../types/Capsules';
import { RocketType } from '../../../types/Rockets';
import Capsule from '../VehiclesItems/Capsule';
import Rocket from '../VehiclesItems/Rocket';
import VehiclesColumn from '../VehiclesColumn/VehiclesColumn';

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