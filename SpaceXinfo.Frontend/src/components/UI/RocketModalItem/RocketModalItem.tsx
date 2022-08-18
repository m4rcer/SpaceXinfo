import React, { ReactNode, useState } from 'react';

export interface IRocketModalItemProps {
    title: string,
    children: ReactNode,
};

const RocketModalItem: React.FunctionComponent<IRocketModalItemProps> = ({
    title,
    children
}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="modal__rocket__chars__item">
        <div className="modal__rocket__chars__item__header"
        onClick={() => setIsOpen(!isOpen)}>
            <div className="modal__rocket__chars__item__title">{title}</div>
            <div className="modal__rocket__chars__angle">
                <i className={
                ["fa-solid fa-angle-down modal__rocket__angle",
                isOpen 
                ? 
                "modal__rocket__angle--up" 
                : ""].join(" ")} ></i>
            </div>
        </div>
        {
            isOpen
            ?
            children
            :
            <div></div>
        }
    </div>
    );
}
export default RocketModalItem;