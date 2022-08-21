import { FC, ReactElement } from 'react';
import './css/style.css';
import userManager, { loadUser, signinRedirect, signoutRedirect } from './auth/user-service';
import AuthProvider from './auth/auth-provider';
import BasePage from './components/pages/BasePage';
import { Client } from './api/api';

const apiClient = new Client('https://localhost:44382');


const App: FC<{}> = (): ReactElement => {
    loadUser();

    return (
        <div className="App">
            <AuthProvider userManager={userManager}>
                <BasePage/>
            </AuthProvider>
        </div>
    );
};

export default App;