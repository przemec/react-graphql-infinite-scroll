import { launch } from "../../api/graphql_response_models";
import { launchesOperations } from "./actions";

export interface AddLaunchesAction {
  type: launchesOperations.ADD;
  newlaunches: launch[];
}

export interface ClearLaunchesAction {
  type: launchesOperations.CLEAR;
}
