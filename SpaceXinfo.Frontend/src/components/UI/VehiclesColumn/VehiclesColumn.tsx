import React, { ReactNode } from 'react';

export interface IVehiclesColumnProps {
    title: string,
    children: ReactNode
};

const VehiclesColumn: React.FunctionComponent<IVehiclesColumnProps> = ({
    title,
    children
}) => {
    return (
    <div className="vehicles__column">
        <div className="vehicles__column__title">{title}</div>
        
        <div className="vehicles__list">
            {children}
        </div>
    </div>
    );
}
export default VehiclesColumn;