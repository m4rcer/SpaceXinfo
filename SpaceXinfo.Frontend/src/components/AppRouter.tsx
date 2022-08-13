import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { getIsAuth } from '../utils/localStorage';

export interface IAppRouterProps {};

const AppRouter: React.FunctionComponent<IAppRouterProps> = props => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(getIsAuth());
    }, []);

    return (

        isAuth
        ?
        <Routes>
            {[...publicRoutes, ...privateRoutes].map(route =>
            <Route
                path = {route.path}
                element = {route.element}
                key = {route.path}
            />)}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
            <Route
                path = {route.path}
                element = {route.element}
                key = {route.path}
            />)}
        </Routes>
    )
}

export default AppRouter;