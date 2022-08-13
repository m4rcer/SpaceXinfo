export interface AuthState {
    isAuth: boolean,
}

export enum AuthActionTypes {
    AUTH_LOGIN = "AUTH_LOGIN",
    AUTH_LOGOUT = "AUTH_LOGOUT",

}

interface AuthLoginAction {
    type: AuthActionTypes.AUTH_LOGIN;
}

interface AuthLogoutAction {
    type: AuthActionTypes.AUTH_LOGOUT;
}

export type AuthAction = AuthLoginAction | AuthLogoutAction;
