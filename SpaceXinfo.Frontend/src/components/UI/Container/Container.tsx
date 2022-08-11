import React, { ReactNode } from 'react';

export interface IContainerProps {
    children: ReactNode;
};

const Container: React.FunctionComponent<IContainerProps> = (
    {children}) => {
    return <div className='container'>{children}</div>
}
export default Container;