import { Navigate } from "react-router-dom";
import SigninOidc from "../auth/SigninOidc";
import SignoutOidc from "../auth/SignoutOidc";
import AboutPage from "../components/pages/About/AboutPage";
import AcronymsPage from "../components/pages/Acronyms/AcronymsPage";
import CoresPage from "../components/pages/Cores/CoresPage";
import LaunchesPage from "../components/pages/Launches/LaunchesPage";
import MainPage from "../components/pages/Main/MainPage";
import ProfilePage from "../components/pages/Profile/ProfilePage";
import VehiclesPage from "../components/pages/Vehicles/VehiclesPage";

export enum AppRoutes {
    Main = "/",
    Launches = "/launches",
    Vehicles = "/vehicles",
    Cores = "/cores",
    Acronyms = "/acronyms",
    About = "/about",
    Signin = "/signin-oidc",
    Signout = "/signout-oidc",
    Profile = "/profile",
    Wrong = "*"
}

export const privateRoutes = [
    {path: AppRoutes.Profile, element: <ProfilePage/>}
]

export const publicRoutes = [
    {path: AppRoutes.Main, element: <MainPage/>},
    {path: AppRoutes.Launches, element: <LaunchesPage/>},
    {path: AppRoutes.Vehicles, element: <VehiclesPage/>},
    {path: AppRoutes.Cores, element: <CoresPage/>},
    {path: AppRoutes.Acronyms, element: <AcronymsPage/>},
    {path: AppRoutes.About, element: <AboutPage/>},
    {path: AppRoutes.Signin, element: <SigninOidc/>},
    {path: AppRoutes.Signout, element: <SignoutOidc/>},
    {path: AppRoutes.Wrong, element: <Navigate to="/" replace />},
]