import { ReactNode } from "react";
import { withCapsule } from "../../../hocs/UI/VehiclesItem/withCapsule";
import { withRocket } from "../../../hocs/UI/VehiclesItem/withRocket";
import { useOpen } from "../../../hooks/useOpen";

export interface IVehiclesItemProps {
    img: string,
    onModalOpen: () => void,
    children: ReactNode,
    title: string,
    specsTitle: string
};

const VehiclesItem: React.FunctionComponent<IVehiclesItemProps> = ({
    img,
    onModalOpen,
    children,
    title,
    specsTitle
}) => {

    const {isOpen, OnOpenClick} = useOpen();

    return (
    <>
    <div className="vehicles__item" onClick={onModalOpen}>
        <>
        <div className="vehicles__item__photo">
            <img src={img} alt=""/>
        </div>
        <div className="vehicles__item__header"
        onClick={(event) => {
            event.stopPropagation();
            OnOpenClick();
        }}>
            <h3 className="vehicles__item__title">{title}</h3>
            <i 
            className={["fa-solid fa-angle-down vehicles__item__angle",
            isOpen 
            ? 
            "vehicles__item__angle--up" 
            : 
            ""].join(" ")}></i>
        </div>
        {
            isOpen
            ?
            children
            :
            <div/>
        }
        <a className="vehicles__item__specs">
            <i className="fa-solid fa-circle-info"></i> {specsTitle}
        </a>
        </>
    </div>
    </>
    );
}
export const Rocket = withRocket(VehiclesItem);
export const Capsule = withCapsule(VehiclesItem);