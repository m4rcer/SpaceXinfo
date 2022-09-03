import React, { ReactNode } from 'react';

export interface ILaunchModalCharItemProps {
    title: string,
    children: ReactNode
};

const LaunchModalCharItem: React.FunctionComponent<ILaunchModalCharItemProps> = ({
    title,
    children
}) => {
    return (
        <div className="modal__launch__char__info__item">
            <div className="modal__launch__char__info__item__col">{title}</div>
            <div className="modal__launch__char__info__item__col text-right">
                {children}
            </div>
        </div>
    )
}
export default LaunchModalCharItem;