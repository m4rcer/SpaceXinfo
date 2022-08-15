import React, { ReactNode } from 'react';

export interface ILaunchModalInfoItemProps {
    title: string,
    children: ReactNode
};

const LaunchModalInfoItem: React.FunctionComponent<ILaunchModalInfoItemProps> = ({
    title,
    children
}) => {
    return (
        <div className="modal__launch__char__info__item">
            <div className="modal__launch__char__info__item__col">{title}</div>
            <div className="modal__launch__char__info__item__col">
                {children}
            </div>
        </div>
    )
}
export default LaunchModalInfoItem;