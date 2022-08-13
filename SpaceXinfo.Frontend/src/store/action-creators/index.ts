import * as LaunchesActionCreators from "./launches";
import * as AuthActionCreators from "./auth";

export default {
    ...LaunchesActionCreators,
    ...AuthActionCreators
}