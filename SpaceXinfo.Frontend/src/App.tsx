import { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import userManager, { loadUser, signinRedirect, signoutRedirect } from './auth/user-service';
import AuthProvider from './auth/auth-provider';
import SignInOidc from './auth/SigninOidc';
import SignOutOidc from './auth/SignoutOidc';
import LaunchesList from './launches/LaunchesList';

const App: FC<{}> = (): ReactElement => {
    loadUser();
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => signinRedirect()}>Login</button>
                <button onClick={() => signoutRedirect()}>Logout</button>
                <AuthProvider userManager={userManager}>
                    <Router>
                        <Routes>
                            <Route path="/" element = {<LaunchesList/>} />
                            <Route
                                path="/signout-oidc"
                                element={<SignOutOidc/>}
                            />
                            <Route path="/signin-oidc" element={<SignInOidc/>} />
                        </Routes>
                    </Router>
                </AuthProvider>
            </header>
        </div>
    );
};

export default App;