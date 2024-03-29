import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { User, UserManager } from 'oidc-client';
import { setAuthHeader } from './auth-headers';
import { setIsAuth } from '../utils/storage';

type AuthProviderProps = {
    userManager: UserManager;
    children: ReactNode
};

const AuthProvider: FC<AuthProviderProps> = ({
    userManager: manager,
    children,
}): any => {
    let userManager = useRef<UserManager>();
    useEffect(() => {
        userManager.current = manager;

        const onUserLoaded = (user: User) => {
            console.log('User loaded: ', user);
            setAuthHeader(user.access_token);
            setIsAuth(true);
        };
        const onUserUnloaded = () => {
            setAuthHeader(null);
            setIsAuth(false);
            window.location.reload();
            console.log('User unloaded');
        };
        const onAccessTokenExpiring = () => {
            setIsAuth(false);
            window.location.reload();
            console.log('User token expiring');
        };
        const onAccessTokenExpired = () => {
            setIsAuth(false);
            window.location.reload();
            console.log('User token expired');
        };
        const onUserSignedOut = () => {
            setIsAuth(false);
            window.location.reload();
            console.log('User signed out');
        };

        userManager.current.events.addUserLoaded(onUserLoaded);
        userManager.current.events.addUserUnloaded(onUserUnloaded);
        userManager.current.events.addAccessTokenExpiring(
            onAccessTokenExpiring
        );
        userManager.current.events.addAccessTokenExpired(onAccessTokenExpired);
        userManager.current.events.addUserSignedOut(onUserSignedOut);

        return function cleanup() {
            if (userManager && userManager.current) {
                userManager.current.events.removeUserLoaded(onUserLoaded);
                userManager.current.events.removeUserUnloaded(onUserUnloaded);
                userManager.current.events.removeAccessTokenExpiring(
                    onAccessTokenExpiring
                );
                userManager.current.events.removeAccessTokenExpired(
                    onAccessTokenExpired
                );
                userManager.current.events.removeUserSignedOut(onUserSignedOut);
            }
        };
    }, [manager]);

    return React.Children.only(children);
};

export default AuthProvider;