import { Navigate } from "react-router-dom";
import SigninOidc from "../auth/SigninOidc";
import SignoutOidc from "../auth/SignoutOidc";
import LaunchesPage from "../components/pages/Launches/LaunchesPage";
import MainPage from "../components/pages/Main/MainPage";
import ProfilePage from "../components/pages/Profile/ProfilePage";

export enum AppRoutes {
    Main = "/",
    Launches = "/launches",
    Vehicles = "/vehicles",
    Cores = "/cores",
    Acronyms = "/acronums",
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
    {path: AppRoutes.Vehicles, element: <MainPage/>},
    {path: AppRoutes.Cores, element: <MainPage/>},
    {path: AppRoutes.Acronyms, element: <MainPage/>},
    {path: AppRoutes.About, element: <MainPage/>},
    {path: AppRoutes.Signin, element: <SigninOidc/>},
    {path: AppRoutes.Signout, element: <SignoutOidc/>},
    {path: AppRoutes.Wrong, element: <Navigate to="/" replace />},
]