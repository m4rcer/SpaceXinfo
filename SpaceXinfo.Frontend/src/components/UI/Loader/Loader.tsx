import React from 'react';

export interface ILoaderProps {};

const Loader: React.FunctionComponent<ILoaderProps> = props => {
    return (
    <div className="loader">
        <div>
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3"></div>
          <div className="c4"></div>
        </div>
    </div>
    )
}
export default Loader;