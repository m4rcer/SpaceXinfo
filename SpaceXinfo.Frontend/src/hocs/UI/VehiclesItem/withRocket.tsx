import ModalBase from "../../../components/modals/ModalBase";
import RocketModal from "../../../components/modals/RocketModal/RocketModal";
import { IVehiclesItemProps } from "../../../components/UI/VehiclesItem/VehiclesItem";
import { useModal } from "../../../hooks/useModal";
import { RocketType } from "../../../types/Rockets";

export interface IRocketProps {
    rocket: RocketType,
};

export function withRocket(Component : React.ComponentType<IVehiclesItemProps>) {
   
    return function (props: IRocketProps) {
        
        const {rocket} = props;
        const {isModalShow, OnModalOpen, OnModalClose} = useModal();

        return (
        <>
            <Component
            title={rocket.name}
            specsTitle="Rocket Specs"
            onModalOpen={OnModalOpen}
            img={rocket.flickr_images[0]}>
                <div className="vehicles__item__text">
                    {rocket.description}
                </div>
            </Component>

            <ModalBase isOpen={isModalShow} OnClose={OnModalClose}>
                <RocketModal rocket={rocket}/>
            </ModalBase>
        </>);
    }
}