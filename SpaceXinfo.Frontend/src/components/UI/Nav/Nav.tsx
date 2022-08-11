import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../routes';
import Button from '../Button/Button';
import { ButtonVariants } from '../Button/ButtonVariants';

export interface INavProps {};

const Nav: React.FunctionComponent<INavProps> = props => {
    return (
        <nav className="nav">
            <Link to={AppRoutes.Launches} className="nav__link">Launches</Link>
            <Link to={AppRoutes.Vehicles} className="nav__link">Vehicles</Link>
            <Link to={AppRoutes.Cores} className="nav__link">Cores</Link>
            <Link to={AppRoutes.Acronyms} className="nav__link">Acronyms</Link>
            <Link to={AppRoutes.About} className="nav__link">About</Link>
            <Link to={AppRoutes.Register}>
                <Button variants={[ButtonVariants.Register]}>Register</Button>
            </Link>
        </nav>
        )
}
export default Nav;