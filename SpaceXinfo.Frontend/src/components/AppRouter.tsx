import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';

export interface IAppRouterProps {};

const AppRouter: React.FunctionComponent<IAppRouterProps> = props => {
    const isAuth = false;

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

            <Route
            path="*"
            element={<Navigate to="/" replace />}
            />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
            <Route
                path = {route.path}
                element = {route.element}
                key = {route.path}
            />)}

            <Route
            path="*"
            element={<Navigate to="/" replace />}
            />
        </Routes>
    )
}

export default AppRouter;