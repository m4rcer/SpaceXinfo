import ModalBase from "../../../components/modals/ModalBase";
import RocketModal from "../../../components/modals/RocketModal/RocketModal";
import { ILaunchSpecsProps } from "../../../components/UI/LaunchSpecs/LaunchSpecs";
import { useModal } from "../../../hooks/useModal";
import { RocketType } from "../../../types/Rockets";

export interface IRocketSpecsProps {
    rocket: RocketType | null,
};

export function withRocketSpecs(Component : React.ComponentType<ILaunchSpecsProps>) {
   
    return function (props: IRocketSpecsProps) {
        
        const {rocket} = props;
        const {isModalShow, OnModalOpen, OnModalClose} = useModal();

        return (
        <>
            <Component
            title={"Rocket Specs"}
            onModalOpen={OnModalOpen}/>

            <ModalBase isOpen={isModalShow} OnClose={OnModalClose}>
                <RocketModal rocket={rocket}/>
            </ModalBase>
        </>);
    }
}