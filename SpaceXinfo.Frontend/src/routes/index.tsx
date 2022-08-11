import LaunchesPage from "../components/pages/Launches/LaunchesPage";
import MainPage from "../components/pages/MainPage/MainPage";

export enum AppRoutes {
    Main = "/",
    Launches = "/launches",
    Vehicles = "/vehicles",
    Cores = "/cores",
    Acronyms = "/acronums",
    About = "/about",
    Register = "/register",
    Login = "/login",
    User = "/user",
}

export const privateRoutes = [
    {path: AppRoutes.User, element: <MainPage/>}
]

export const publicRoutes = [
    {path: AppRoutes.Main, element: <MainPage/>},
    {path: AppRoutes.Launches, element: <LaunchesPage/>},
    {path: AppRoutes.Vehicles, element: <MainPage/>},
    {path: AppRoutes.Cores, element: <MainPage/>},
    {path: AppRoutes.Acronyms, element: <MainPage/>},
    {path: AppRoutes.About, element: <MainPage/>},
    {path: AppRoutes.Register, element: <MainPage/>},
    {path: AppRoutes.Login, element: <MainPage/>},
    
]