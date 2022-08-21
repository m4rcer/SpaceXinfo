import { combineReducers } from "redux";
import { capsulesReducer } from "./capsulesReducer";
import { favouriteLaunchesReducer, launchReducer, nextLaunchReducer, pastLaunchesReducer, upcomingLaunchesReducer} from "./launchesReducer";
import { launchpadReducer } from "./launchpadsReducer";
import { payloadReducer } from "./payloadsReducer";
import { companyReducer } from "./companyReducer";
import { rocketReducer, rocketsReducer } from "./rocketsReducer";
import { coreReducer, coresReducer } from "./coresReducer";

export const rootReducer = combineReducers({
    pastLaunches: pastLaunchesReducer,
    upcomingLaunches: upcomingLaunchesReducer,
    nextLaunch: nextLaunchReducer,
    launch: launchReducer,
    rockets: rocketsReducer,
    rocket: rocketReducer,
    capsules: capsulesReducer,
    launchpad: launchpadReducer,
    payload: payloadReducer,
    company: companyReducer,
    cores: coresReducer,
    core: coreReducer,
    favouriteLaunches: favouriteLaunchesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;