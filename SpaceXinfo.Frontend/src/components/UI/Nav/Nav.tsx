import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signinRedirect } from '../../../auth/user-service';
import { AppRoutes } from '../../../routes';
import { getIsAuth } from '../../../utils/storage';
import Button from '../Button/Button';
import { ButtonVariants } from '../Button/ButtonVariants';

export interface INavProps {};

const Nav: React.FunctionComponent<INavProps> = props => {
    const [isAuth, setIsAuth] = useState<boolean>(false);


    useEffect(() => {
        setIsAuth(getIsAuth());
    }, []);

    return (
        <nav className="nav">
            <Link to={AppRoutes.Launches} className="nav__link">Launches</Link>
            <Link to={AppRoutes.Vehicles} className="nav__link">Vehicles</Link>
            <Link to={AppRoutes.Cores} className="nav__link">Cores</Link>
            <Link to={AppRoutes.Acronyms} className="nav__link">Acronyms</Link>
            <Link to={AppRoutes.About} className="nav__link">About</Link>
            {!isAuth ? <Button variants={[ButtonVariants.Register]}
            OnClick={() => signinRedirect()}>Login</Button>
            : <Link to={AppRoutes.Profile} className="nav__link nav__link--profile">Profile</Link>}
        </nav>
        )
}
export default Nav;