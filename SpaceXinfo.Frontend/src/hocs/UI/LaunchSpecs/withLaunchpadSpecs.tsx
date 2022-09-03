import LaunchpadModal from "../../../components/modals/LaunchpadModal/LaunchpadModal";
import ModalBase from "../../../components/modals/ModalBase";
import { ILaunchSpecsProps } from "../../../components/UI/LaunchSpecs/LaunchSpecs";
import { useModal } from "../../../hooks/useModal";
import { LaunchpadType } from "../../../types/Launchpads";

export interface ILaunchpadSpecsProps {
    launchpad: LaunchpadType | null;
};

export function withLaunchpadSpecs(Component : React.ComponentType<ILaunchSpecsProps>) {
   
    return function (props: ILaunchpadSpecsProps) {
        
        const {launchpad} = props;
        const {isModalShow, OnModalOpen, OnModalClose} = useModal();

        return (
        <>
            <Component
            title={"Launchpad Specs"}
            onModalOpen={OnModalOpen}/>

            <ModalBase isOpen={isModalShow} OnClose={OnModalClose}>
                <LaunchpadModal launchpad={launchpad}/>
            </ModalBase>
        </>);
    }
}