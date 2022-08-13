import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { launchesReducer } from "./launchesReducer";

export const rootReducer = combineReducers({
    launches: launchesReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;