import { AuthAction, AuthActionTypes, AuthState } from "../../types/Auth";

const initialState: AuthState = {
    isAuth: false,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.AUTH_LOGIN:
            return {isAuth: true};
        case AuthActionTypes.AUTH_LOGOUT:
            return {isAuth: false};  
        default:
            return state;
    }
}