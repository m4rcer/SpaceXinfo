import * as LaunchesActionCreators from "./launches";
import * as RocketsActionCreators from "./rockets";
import * as CapsulesActionCreators from "./capsules";
import * as LaunchpadsActionCreators from "./launchpads";
import * as PayloadsActionCreators from "./payloads";
import * as CompanyActionCreators from "./company";
import * as CoresActionCreators from "./cores";


export default {
    ...LaunchesActionCreators,
    ...RocketsActionCreators,
    ...CapsulesActionCreators,
    ...LaunchpadsActionCreators,
    ...PayloadsActionCreators,
    ...CompanyActionCreators,
    ...CoresActionCreators,
}