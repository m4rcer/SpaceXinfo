import axios from "axios"
import { Dispatch } from "redux"
import { signinRedirect, signoutRedirect } from "../../auth/user-service"
import { AuthAction, AuthActionTypes } from "../../types/Auth"

export const login = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.AUTH_LOGIN});        
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.AUTH_LOGOUT});
    }
}