import CapsuleModal from "../../../components/modals/CapsuleModal/CapsuleModal";
import ModalBase from "../../../components/modals/ModalBase";
import { IVehiclesItemProps } from "../../../components/UI/VehiclesItem/VehiclesItem";
import { useModal } from "../../../hooks/useModal";
import { CapsuleType } from "../../../types/Capsules";

export interface ICapsuleProps {
    capsule: CapsuleType
};

export function withCapsule(Component : React.ComponentType<IVehiclesItemProps>) {
   
    return function (props: ICapsuleProps) {
        
        const {capsule} = props;
        const {isModalShow, OnModalOpen, OnModalClose} = useModal();

        return (
        <>
            <Component
            title={`${capsule.serial} - ${capsule.type}`}
            specsTitle="Capsule Specs"
            onModalOpen={OnModalOpen}
            img="./img/capsules/c101.jfif">
                <div className="vehicles__item__info">
                    <div className="vehicles__item__info__characteristics">
                        <div className="vehicles__item__info__char">Status</div>
                        <div className="vehicles__item__info__char">Reuse Count</div>
                        <div className="vehicles__item__info__char">Water Landings</div>
                        <div className="vehicles__item__info__char">Land Landings</div>
                    </div>

                    <div className="vehicles__item__info__values">
                        <div className="vehicles__item__info__val">{capsule.status.toUpperCase()}</div>
                        <div className="vehicles__item__info__val">{capsule.reuse_count}</div>
                        <div className="vehicles__item__info__val">{capsule.water_landings}</div>
                        <div className="vehicles__item__info__val">{capsule.land_landings}</div>
                    </div>
                </div>
            </Component>

            <ModalBase isOpen={isModalShow} OnClose={OnModalClose}>
                <CapsuleModal capsule={capsule}/>
            </ModalBase>
        </>);
    }
}