import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../auth/auth-provider';
import userManager from '../../auth/user-service';
import AppRouter from '../AppRouter';
import Footer from '../UI/Footer/Footer';
import Header from '../UI/Header/Header';

export interface IBasePageProps {};

const BasePage: React.FunctionComponent<IBasePageProps> = props => {
    return (
        <>
          <BrowserRouter>
            <div className="wrapper">
              <Header/>

              <main className="main">
                <AppRouter/>
              </main>

              <Footer/>
            </div>
          </BrowserRouter>

        </>
    )
}
export default BasePage;