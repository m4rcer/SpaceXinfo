import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { AppRoutes } from '../../../routes';
import Container from '../Container/Container';
import Nav from '../Nav/Nav';

export interface IHeaderProps {};

const Header: React.FunctionComponent<IHeaderProps> = props => {

    return (
        <header className="header">
            <Container>
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to={AppRoutes.Main} className="header__logo__link">
                            <i className="fa-solid fa-rocket header__icon"></i>
                            <b>SpaceX</b>info
                        </Link>
                    </div>

                    <Nav/>                    
                </div>
            </Container>
        </header>)
}
export default Header;