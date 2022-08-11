import React from 'react';

export interface IFooterProps {};

const Footer: React.FunctionComponent<IFooterProps> = props => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__name"><b>SpaceX</b>info</div>
                <div className="footer__origins">Data was taken from 
                    <a href="https://docs.spacexdata.com" target="_blank">
                        docs.spacexdata.com
                    </a>
                </div>
            </div>
        </div>
    </footer>)
}
export default Footer;