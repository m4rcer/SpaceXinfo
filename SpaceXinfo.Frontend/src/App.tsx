import { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/style.css';
import userManager, { loadUser, signinRedirect, signoutRedirect } from './auth/user-service';
import AuthProvider from './auth/auth-provider';
import SignInOidc from './auth/SigninOidc';
import SignOutOidc from './auth/SignoutOidc';
import AppRouter from './components/AppRouter';
import BasePage from './components/pages/BasePage';
import { Client } from './api/api';

const apiClient = new Client('https://localhost:44382');


const App: FC<{}> = (): ReactElement => {


    return (
        <div className="App">
                <AuthProvider userManager={userManager}>
                    <BasePage/>
                </AuthProvider>
        </div>
    );
};

export default App;