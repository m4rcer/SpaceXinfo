import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { bodyClasses } from '../../utils/bodyClasses';
import { addBodyClass } from '../../utils/classes';

export interface IModalBaseProps {
    isOpen: boolean,
    children: ReactNode,
    OnClose: () => void,
};

const ModalBase: React.FunctionComponent<IModalBaseProps> = ({
    isOpen,
    children,
    OnClose
}) => {

    if(!isOpen) 
        return null;

    const root = document.getElementById('root') as HTMLElement;

    return ReactDOM.createPortal(
        <div className="modal" onClick={() => OnClose()}>
            <div className="modal__dialog" onClick={e => e.stopPropagation()}>
                <div className="modal__close" onClick={() => OnClose()}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>

                {children}
            </div>
        </div>,
        root
    );
}
export default ModalBase;